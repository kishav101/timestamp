import { useMutation } from "react-query";
import Middleware from "../../Middleware/Middleware";
import { PostParamType } from "../../Middleware/types";

const requestFunction = async (props: any): Promise<object> => {
  const requestObject: PostParamType = {
    url: "",
    body: props.body,
  };

  const response = await Middleware._post(requestObject);
  return response;
};

const useRegisterHook = (props: any) => {
  const { mutate, data, isError, status, isLoading } =
    useMutation(requestFunction);
  return { mutate, data, isError, status, isLoading };
};

export default useRegisterHook;
