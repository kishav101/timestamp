import { useMutation } from "react-query";
import Middleware from "../../Middleware/Middleware";
import { PostParamType } from "../../Middleware/types";

const requestFunction = async (props: any): Promise<any> => {
  const requestBody: PostParamType = {
    url: "",
    body: props.body,
  };

  const result = await Middleware._post(requestBody);
  return result;
};

const useRetrieveUserRolesHook = (props: any) => {
  const { mutate, isLoading, error, data, status, isError, isSuccess } =
    useMutation(requestFunction);
  return { mutate, isLoading, error, data, status, isError, isSuccess };
};

export default useRetrieveUserRolesHook;
