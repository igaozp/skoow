import {acceptHMRUpdate, defineStore} from "pinia";

function apiLogin(a: string, p: string) {
    if (a === 'ed' && p === 'ed') {
        return Promise.resolve({isAdmin: true})
    }
    if (p === 'ed') {
        return Promise.resolve({isAdmin: false})
    }
    return Promise.reject(new Error('invalid credentials'))
}

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        name: 'Eduardo',
        isAdmin: true
    }),

    actions: {
        logout() {
            this.$patch({
                name: '',
                isAdmin: false,
            })
        },

        async login(user: string, password: string) {
            const userData = await apiLogin(user, password)

            this.$patch({
                name: user,
                ...userData
            })
        }
    }
})

// @ts-ignore
if (import.meta.hot) {
    // @ts-ignore
    import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}