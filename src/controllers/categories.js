import Api from '@/Api'

export default {
    getCategories(inputs = {}) {
        let pageNo = inputs.page ? inputs.page : 1
        return Api.get('/dashboard-categories', { params: { page: pageNo } }).then((response) => response.data)
    },

    deleteCategory(categoryId) {
        return Api.post(`/dashboard-categories/delete/${categoryId}`).then((response) => response.data)
    },
}
