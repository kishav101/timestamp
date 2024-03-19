import { useQuery } from "@tanstack/react-query";
import  MiddleWare  from "../../Middleware/Middleware";
import { PostParamType } from "../../Middleware/types";
import { API } from "../../ApiEndpoints/ApiEndpoints";

const requestFunction = async (props: any) => {
    const requestObject: PostParamType = {
        url: API.account.loginApi,
        body: props.body
    }
    return await MiddleWare._post(requestObject);
}

const useLoginHook = (props: any) => {
    const { data, ...rest } = useQuery({
        queryKey: ['login'],
        queryFn: () => requestFunction(props),
    })
    console.log("data=>", data, rest?.error)
    return {
        data: data,
        rest: rest
    }
}

export default useLoginHook;
