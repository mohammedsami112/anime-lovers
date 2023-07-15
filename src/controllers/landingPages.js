import Api from '@/Api'

export default {
    getLandingPages(inputs = {}) {
        let pageNo = inputs.page ? inputs.page : 1
        return Api.get('/landing-pages', { params: { page: pageNo } }).then((response) => response.data)
    },

    getCategories() {
        return Api.get('/landing-pages/categories').then((response) => response.data)
    },

    toggleAdsStatus(landingPageId) {
        return Api.post(`/landing-pages/toggle-ads/${landingPageId}`).then((response) => response.data)
    },

    manageLandingPages(inputs, landingPageId = null) {
        let editable = landingPageId == null ? 'create' : `update/${landingPageId}`
        return Api.post(`/landing-pages/${editable}`, inputs).then((response) => response.data)
    },

    deleteLandingPage(landingPageId) {
        return Api.post(`/landing-pages/delete/${landingPageId}`).then((response) => response.data)
    },
}
