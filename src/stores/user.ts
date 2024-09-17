import { getLevelBranch } from '@/utils/levels';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
	state: () => {
		let user: any = { name: '', loggedIn: false };
		let requests = [];
		const userStorage = localStorage.getItem('user');
		if (userStorage) {
			user = JSON.parse(userStorage);
		}
		const requestStorage = localStorage.getItem('requests');
		if (requestStorage) {
			console.log(requestStorage);
			requests = JSON.parse(requestStorage);
		}
		return {
			user,
			requests,
		};
	},
	actions: {
		setUser(user: any) {
			this.user = { ...user, loggedIn: true };
			localStorage.setItem('user', JSON.stringify(this.user));
		},
		setRequests(requests: any[]) {
			console.log('we set requests');
			this.requests = requests;
			localStorage.setItem('requests', JSON.stringify(this.requests));
		},
		logout() {
			this.user = { name: '', loggedIn: false };
			this.requests = [];
			localStorage.removeItem('user');
			localStorage.removeItem('requests');
		},
		requestDecision(parent: string, decision: boolean) {
			console.log(parent, decision);
		},
	},
	getters: {
		isAuthenticated: state => state.user.loggedIn,
		userName: state => state.user.name,
		userRole: state => state.user.role,
		childs: state => {
			console.log('get childs');
			const usersStorage = localStorage.getItem('allUsers');
			if (!usersStorage) {
				return [];
			}
			const allUsers = JSON.parse(usersStorage);
			const childs = [];
			let id = 0;
			for (const user of allUsers) {
				for (const request of state.requests) {
					if (user.email === request.student) {
						id++;
						childs.push({
							id: `${id}`,
							avatar: user.avatar,
							name: user.firstname + ' ' + user.lastname,
							level: getLevelBranch(user.level, user.branch),
							pending: request.pending,
						});
					}
				}
			}
			return childs;
		},
		notifs: state => {
			return state.user.role === 'student' ? state.requests.filter((request: any) => request.pending) : [];
		},
	},
});
