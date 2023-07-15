import Api from '@/Api'

export default {
    login(payload) {
        return Api.post('/auth/login', payload).then((response) => response.data)
    },

    changePassword(payload) {
        return Api.post('/auth/change-password', payload).then((response) => response.data)
    },

    logout() {
        return Api.post('/auth/logout').then((response) => response.data)
    },
}
