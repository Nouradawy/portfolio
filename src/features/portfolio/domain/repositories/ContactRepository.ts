export interface ContactRepository {
  sendMessage(formElement: HTMLFormElement): Promise<{ text: string; status: number }>;
}
