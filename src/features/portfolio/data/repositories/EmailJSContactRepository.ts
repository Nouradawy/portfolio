import emailjs from "@emailjs/browser";
import type { ContactRepository } from "../../domain/repositories/ContactRepository";

export class EmailJSContactRepository implements ContactRepository {
  constructor(
    private readonly serviceId: string,
    private readonly templateId: string,
    private readonly publicKey: string,
  ) {}

  async sendMessage(formElement: HTMLFormElement) {
    return emailjs.sendForm(this.serviceId, this.templateId, formElement, this.publicKey);
  }
}
