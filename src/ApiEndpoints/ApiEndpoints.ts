const DEV_ENVIRONMENT = "http://localhost:5139";
const PRODUCTION_ENVIRONMENT = ""
const CURRENT_ENVIRONMENT = "DEV"


export const API = {
    account: {
        loginApi: CURRENT_ENVIRONMENT === "DEV" ? DEV_ENVIRONMENT+"/retrieveLogin" : PRODUCTION_ENVIRONMENT+"/retrieveLogin",
        forgotPasswordApi: CURRENT_ENVIRONMENT === "DEV" ? DEV_ENVIRONMENT+"/ForgotPassword" : PRODUCTION_ENVIRONMENT+"/ForgotPassword",
        registerUserApi: CURRENT_ENVIRONMENT === "DEV" ? DEV_ENVIRONMENT+"/AddClientUser" : PRODUCTION_ENVIRONMENT+"/AddClientUser",
    }
}