// stores/user.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
	state: () => {
		const userStorage = localStorage.getItem('user');
		console.log({ userStorage });
		const user = (userStorage && JSON.parse(userStorage)) || { name: '', loggedIn: false };
		console.log({ user });
		return {
			user,
		};
	},
	actions: {
		setUser(name: string) {
			this.user = { name, loggedIn: true };
			localStorage.setItem('user', JSON.stringify(this.user));
		},
		logout() {
			this.user = { name: '', loggedIn: false };
			localStorage.removeItem('user');
		},
	},
	getters: {
		isAuthenticated: state => state.user.loggedIn,
		userName: state => state.user.name,
	},
});
