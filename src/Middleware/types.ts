
type urlParam = {
    key: string,
    value: string
}

export type GetParamType = {
    url: string;
    urlParam?: urlParam[];
};

export type DeleteParamType = {
    url: string;
    body: any;
};

export type PutParamType = {
    url: string;
    body?: any;
};

export type UpdateParamType = {
    url: string;
    body?: any;
};

export type PostParamType = {
    url: string,
    body: any;
}