import type { ContactRepository } from "../domain/repositories/ContactRepository";

export class SendContactMessage {
  constructor(private readonly repository: ContactRepository) {}

  execute(formElement: HTMLFormElement) {
    return this.repository.sendMessage(formElement);
  }
}
