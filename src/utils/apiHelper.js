import axios from 'axios'

export const apiGetHelper = async (URL, contentType, requestHeaders) => {
    try {
        let contentTypeText = 'text/plain;charset=UTF-8'
        if (contentType) {
            contentTypeText = contentType
        }

        let headers = {
            Accept: 'application/json',
            'Content-Type': contentTypeText,
            'Cache-Control': 'no-cache',
            'Access-Control-Allow-Origin': '*'
        }
        if (requestHeaders) {
            headers = {
                ...headers,
                ...requestHeaders
            }
        }

        const responseData = await axios.get(URL, {
            headers
        })
        return responseData
    } catch (e) {
        return e
    }
}