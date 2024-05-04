import { emailPattern, passwordPattern } from "../Regex/Regex";

let VLoginFormUsername = {
    required: true,
    pattern: emailPattern
}

let VLoginFormPassword = {
    required: true,
    pattern: passwordPattern
}

export default {
    VLoginFormUsername,
    VLoginFormPassword
} ;