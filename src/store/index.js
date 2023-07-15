import { createStore } from 'vuex'

export default createStore({
    state: {
        sidebarVisible: '',
        sidebarUnfoldable: false,

        user: {
            token: null || localStorage.getItem('access_token'),
            data: null || JSON.parse(localStorage.getItem('userData')),
        },

        users: {
            data: [],
            current: {},
        },

        categories: {
            data: [],
            current: {},
            parents: [],
        },

        landingPages: {
            data: [],
            current: {},
            categories: [],
        },
    },
    mutations: {
        toggleSidebar(state) {
            state.sidebarVisible = !state.sidebarVisible
        },
        toggleUnfoldable(state) {
            state.sidebarUnfoldable = !state.sidebarUnfoldable
        },
        updateSidebarVisible(state, payload) {
            state.sidebarVisible = payload.value
        },

        // User
        SET_USER_DATA(state, payload) {
            state.user.data = payload.user
            state.user.token = payload.token
        },

        // Users
        SET_USERS(state, payload) {
            state.users.data = payload
        },
        SET_CURRENT_USER(state, payload) {
            state.users.current = payload
        },

        // Categories
        SET_CATEGORIES(state, payload) {
            state.categories.data = payload
        },
        SET_CATEGORIES_PARENTS(state, payload) {
            state.categories.parents = payload
        },
        SET_CURRENT_CATEGORY(state, payload) {
            state.categories.current = payload
        },

        // Landing Pages
        SET_LANDING_PAGES(state, payload) {
            state.landingPages.data = payload
        },
        SET_LANDING_PAGE_CATEGORIES(state, payload) {
            state.landingPages.categories = payload
        },
        SET_CURRENT_LANDING_PAGE(state, payload) {
            state.landingPages.current = payload
        },
    },
    actions: {
        // User
        loginSuccess({ commit }, payload) {
            commit('SET_USER_DATA', payload)
            localStorage.setItem('userData', JSON.stringify(payload.user))
            localStorage.setItem('access_token', payload.token)
        },
        logoutSuccess() {
            localStorage.removeItem('userData')
            localStorage.removeItem('access_token')
        },

        // Users
        setCurrentUser({ state, commit }, payload) {
            let userData = state.users.data.filter((user) => user.id == payload)[0]
            commit('SET_CURRENT_USER', userData)
        },

        // Categories
        setCurrentCategory({ state, commit }, payload) {
            let categoryData = state.categories.data.filter((category) => category.id == payload)[0]
            commit('SET_CURRENT_CATEGORY', categoryData)
        },

        // Landing Pages
        setCurrentLandingPage({ state, commit }, payload) {
            let landingPageData = state.landingPages.data.filter((landingPage) => landingPage.id == payload)[0]
            commit('SET_CURRENT_LANDING_PAGE', landingPageData)
        },
    },
    modules: {},
})
