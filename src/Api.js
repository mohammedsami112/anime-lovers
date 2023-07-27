import axios from 'axios'

const Api = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    withCredentials: true,
})

Api.interceptors.request.use(
    (config) => {
        config.headers['Access-Control-Allow-Origin'] = '*'
        config.headers['X-Requested-With'] = 'XMLHttpRequest'
        // config.headers['Content-Type'] = 'application/json'

        const access_token = localStorage.getItem('access_token')

        if (access_token) {
            config.headers['Authorization'] = `Bearer ${access_token}`
        }

        if (config.params != null) {
            for (const key in config.params) {
                if (config.params[key] == '' || config.params[key] == null) {
                    config.params[key] == false ? '' : delete config.params[key]
                }
            }
        }

        return config
    },
    (error) => Promise.reject(error),
)

export default Api
