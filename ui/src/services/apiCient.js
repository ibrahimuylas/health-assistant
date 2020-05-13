import HttpStatus from 'http-status-codes';

export function get(url) {
    return new Promise(handleResponse => {
        handleResponse(callApi(url, null, 'GET', true));
    });
}

export function patch(url, data = null) {
    return new Promise(handleResponse => {
        handleResponse(callApi(url, data, 'PATCH'));
    });
}

export function post(url, data = {}, returnData = false) {
    return new Promise(handleResponse => {
        handleResponse(callApi(url, data, 'POST', returnData));
    });
}

async function callApi(url, data, method, returnData) {
    let payload = {
        data: undefined,
        error: undefined
    };

    try {
        let headers = {
            'Content-Type': 'application/json'
        };

        await fetch(url, {
            method,
            mode: 'cors',
            headers,
            body: data ? JSON.stringify(data) : null

        }).then(async res => {

            payload.status = res.status;

            if (res.status >= HttpStatus.BAD_REQUEST) {
                throw HttpStatus.getStatusText(res.status);
            }

            if (returnData)
                payload.data = await res.json();

        }).catch(error => {
            payload.error = error;
        });

    } catch (error) {
        payload.error = error;
    }

    return payload;
}