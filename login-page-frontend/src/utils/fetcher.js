const BACKEND_URL = process.env.NODE_ENV === 'production' 
                                            ? process.env.REACT_APP_BACKEND_URL
                                            : process.env.REACT_APP_BACKEND_URL_DEV

// Get CSRF token
async function getCSRFToken() {
    const response = await fetch(BACKEND_URL + '/csrf', {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        }
    })
    let result = await response.json()
    return result.token
}

async function updateOptions(options) {
    const update = { ...options }
    if (update.method !== "GET") {
        update.headers = {
            ...update.headers,
            'X-CSRF-Token': await getCSRFToken()
        }
    }
    return update
}

export default async function fetcher(url, options) {
    return fetch(url, await updateOptions(options))
}