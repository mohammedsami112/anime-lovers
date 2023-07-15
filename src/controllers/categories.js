import Api from '@/Api'

export default {
    getCategories(inputs = {}) {
        let pageNo = inputs.page ? inputs.page : 1
        return Api.get('/categories', { params: { page: pageNo } }).then((response) => response.data)
    },

    getCategoriesParent() {
        return Api.get('/categories/parents-list')
    },

    manageCategories(inputs, categoryId = null) {
        let editable = categoryId == null ? 'create' : `update/${categoryId}`
        return Api.post(`/categories/${editable}`, inputs).then((response) => response.data)
    },

    deleteCategory(categoryId) {
        return Api.post(`/categories/delete/${categoryId}`).then((response) => response.data)
    },
}
