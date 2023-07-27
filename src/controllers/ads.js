import Api from '@/Api'

export default {
    getAds(inputs = {}) {
        let pageNo = inputs.page ? inputs.page : 1
        return Api.get('/ads', { params: { page: pageNo } }).then((response) => response.data)
    },

    addAds(inputs) {
        let formData = new FormData()
        formData.append('title', inputs.title)
        formData.append('url', inputs.url)
        formData.append('image', inputs.image)

        console.log(formData)

        return Api.post('/ads/create', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }).then((response) => response.data)
    },

    deleteAds(adId) {
        return Api.post(`/ads/delete/${adId}`).then((response) => response.data)
    },
}
