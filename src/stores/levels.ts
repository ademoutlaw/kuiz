import { useFetch } from '@/composition/fetch';
import { defineStore } from 'pinia';
import { watch } from 'vue';

export const useLevelsStore = defineStore('levels', {
	state: () => ({
		allLevels: [],
		institution: '',
		level: '',
		branch: '',
	}),
	actions: {
		async loadLevels(form: any) {
			const fetch = useFetch();
			const levelsData = await fetch.get('levels.all');
			console.log(levelsData);
			const levelsById: any = {};
			this.allLevels = levelsData.levels.map((level: any) => {
				const uLevel = {
					...level,
					branches: [],
				};
				levelsById[level.id] = uLevel;
				return uLevel;
			});
			const branchsById: any = {};
			levelsData.branches.map((branch: any) => {
				const uBranch = {
					...branch,
					optionalSubjects: [],
				};
				branchsById[branch.id] = uBranch;
				levelsById[branch.level_id] && levelsById[branch.level_id].branches.push(uBranch);
			});
			levelsData.subjects.map((subject: any) => {
				branchsById[subject.branch_id] && branchsById[subject.branch_id].optionalSubjects.push(subject);
			});
			console.log(this.allLevels);
			// watch for form changes
			watch(
				() => form.institution,
				value => {
					console.log('form has changed', value);
					this.institution = value;
					this.level = '';
					this.branch = '';
					form.level = '';
					form.branch = '';
					form.optionalSubject = '';
					if (value === 'free') {
						const levels = this.allLevels.filter((l: any) => l.hasFree);
						if (levels.length) {
							const level: any = levels[0];
							this.level = level.id;
							form.level = this.level;
						}
					}
				}
			);
			watch(
				() => form.level,
				value => {
					console.log('level form has changed', value);
					this.level = value;
					this.branch = '';
					form.branch = '';
					form.optionalSubject = '';
				}
			);
			watch(
				() => form.branch,
				value => {
					console.log('branch form has changed', value);
					this.branch = value;
					form.optionalSubject = '';
				}
			);
			watch(
				() => this.branches,
				value => {
					console.log('branches gettee has changed', value);
					if (value.length === 1) {
						form.optionalSubject = '';
						form.branch = value[0].id;
						this.branch = value[0].id;
					}
					// form.optionalSubject = '';70865389
				}
			);
		},
	},
	getters: {
		levels(state) {
			return state.allLevels.filter((level: any) => level.can_be_free_candidate || state.institution !== 'free');
		},
		branches(state): any {
			const levels: any[] = this.levels.filter((l: any) => state.level === l.id);
			if (levels.length) {
				return levels[0].branches;
			}
			return [];
		},
		optionalSubjects(state): any {
			const branches: any[] = this.branches.filter((l: any) => state.branch === l.id);
			if (branches.length) {
				return branches[0].optionalSubjects;
			}
			return [];
		},
	},
});
