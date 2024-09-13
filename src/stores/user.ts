// stores/user.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
	state: () => {
		return {
			authenticated: false,
			_user: null as User | null,
			unverifiedEmail: null as string | null,
		};
	},
	actions: {
		setUser(user: User) {
			this._user = { ...user };
			this.unverifiedEmail = null;
		},
		setUnverifiedEmail(email: string) {
			this.unverifiedEmail = email.replace(/(.{2})(.*)(?=@)/, function (_gp1, gp2, gp3) {
				for (let i = 0; i < gp3.length; i++) {
					gp2 += '*';
				}
				return gp2;
			});
		},
		clearUnverifiedEmail() {
			this.unverifiedEmail = null;
		},
		clearUser() {
			this._user = null;
			this.unverifiedEmail = null;
			this.authenticated = false;
		},
		setAuthenticated(authenticated: boolean) {
			this.authenticated = authenticated;
		},
	},
	getters: {
		isAuthenticated: state => state.authenticated,
		user: state => ({ ...(state._user || {}) }),
		hasToverifyEmail: state => !!state.unverifiedEmail,
		isLoggedIn: state => state.authenticated && state._user && state.unverifiedEmail === null,
		userAvatar: state => {
			if (state._user) {
				return state._user.firstname.charAt(0).toUpperCase();
			}
			return state.unverifiedEmail?.charAt(0).toUpperCase();
		},
	},
	persist: true,
});
