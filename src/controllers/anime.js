import Api from '@/Api'

export default {
    getAnime(inputs = {}) {
        let pageNo = inputs.page ? inputs.page : 1
        return Api.get('/dashboard-anime', { params: { page: pageNo } }).then((response) => response.data)
    },

    addAnime(link) {
        return Api.get('/scrapers/anime', { params: { link: link } }).then((response) => response.data)
    },

    addEpisode(link, anime) {
        return Api.get('/scrapers/episode', { params: { link: link, anime: anime } }).then((response) => response.data)
    },

    deleteAnime(anime) {
        return Api.post(`/delete/${anime}`).then((response) => response.data)
    },
}
