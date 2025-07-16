import { useMutation } from 'react-query';
import { PostParamType } from '../../Middleware/types';
import { useEffect } from 'react';
import { API } from '../../ApiEndpoints/ApiEndpoints';
import Middleware from '../../Middleware/Middleware'; 

const requestFunction = async (props: any): Promise<any> => {
  
    const requestObject: PostParamType = {
        url: API.account.loginApi,
        body: props
    }
    const response = await Middleware._post(requestObject);
    return response;
}

const useLoginHook = (props: any) => {
    const { mutate, data, isError, status, isLoading } = useMutation(requestFunction);
    return { data, isError, status, mutate, isLoading }; 
}

export default useLoginHook;
