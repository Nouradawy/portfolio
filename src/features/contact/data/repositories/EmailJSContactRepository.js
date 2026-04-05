import emailjs from '@emailjs/browser';
import { ContactRepository } from "../../domain/repositories/ContactRepository.js";

export class EmailJSContactRepository extends ContactRepository {
    constructor(serviceId, templateId, publicKey) {
        super();
        this.serviceId = serviceId;
        this.templateId = templateId;
        this.publicKey = publicKey;
    }

    async sendMessage(formElement) {
        return await emailjs.sendForm(
            this.serviceId,
            this.templateId,
            formElement,
            this.publicKey
        );
    }
}
