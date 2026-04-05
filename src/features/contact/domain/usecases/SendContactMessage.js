export class SendContactMessage {
    constructor(contactRepository) {
        this.contactRepository = contactRepository;
    }

    async execute(formElement) {
        return await this.contactRepository.sendMessage(formElement);
    }
}
