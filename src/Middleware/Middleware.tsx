import { DeleteParamType, GetParamType, PostParamType, PutParamType, UpdateParamType } from "./types";

const _get = async (getParams: GetParamType ) => {
    let urlEndpoint = getParams.url;
    const urlParams = getParams?.urlParam ?? [];
    let paramstring = getParams+"?";

    if(urlParams?.length > 0 ) {
        let amperSign;
        urlParams.map((item, index) => {
            amperSign =  urlParams.length > 1 && index < urlParams.length ?  "&" : "";
            paramstring = paramstring + `${item.key}` + "=" + `${item.value}` + amperSign;
        })

        urlEndpoint = paramstring;
    } else {
        urlEndpoint = urlEndpoint;
    }

    const response = await fetch(urlEndpoint);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}

const _post = async (postParams: PostParamType) => {
    const urlEndpoint = postParams?.url;
    const body = postParams?.body;
    console.log(postParams)
    return fetch(urlEndpoint, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: body // body data type must match "Content-Type" header
        })
        .then(response => response.json());
}
const _delete = async (deleteParams: DeleteParamType) => {
    const urlEndpoint = deleteParams?.url;
    const body = deleteParams?.body;

    return fetch(urlEndpoint, {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: body // body data type must match "Content-Type" header
        })
        .then(response => response.json());
}
const _put = (putParams: PutParamType) => {
    
}
const _update = (updateParams: UpdateParamType) => {
    
}

export default {
    _get,
    _post,
    _delete,
    _put,
    _update
}