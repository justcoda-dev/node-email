
import {transporter} from "./server.js";

export async function sendEmail(email, placeholder) {
    try {

        const mailResponse = await transporter.sendMail(placeholder);
        return mailResponse
    } catch (e) {
        console.error("error")
        return new Error(e)
    }

}