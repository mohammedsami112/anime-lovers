import Api from '@/Api'

export default {
    getUsers(inputs = {}) {
        let pageNo = inputs.page ? inputs.page : 1
        return Api.get('/users', { params: { page: pageNo } }).then((response) => response.data)
    },
    manageUsers(inputs, userId = null) {
        let editable = userId == null ? 'create' : `update/${userId}`
        return Api.post(`/users/${editable}`, inputs).then((response) => response.data)
    },

    deleteUsers(userId) {
        return Api.post(`/users/delete/${userId}`).then((response) => response.data)
    },
}
