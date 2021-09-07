import ENDPOINTS from "./endpoints"

const BASE_URL = 'https://61334b6a7859e700176a36b3.mockapi.io/api/v1'

class Api {
    constructor(baseUrl, endpoints) {
        this.baseUrl = baseUrl
        this.endpoints = endpoints  
    }
    async generateRequest(endpoint,data) {
        const {method, uri} = this.endpoints[endpoint]
        return fetch(`${this.baseUrl}${uri}`, {method, body: data})
    }
    async fetch(endpoint, data) {
        const response = await this.generateRequest(endpoint, data)
        return response.json()
    }
}

export default new Api(BASE_URL, ENDPOINTS )