import type { PaymentRepository } from "../../domain/repositories/PaymentRepository";

export class CreatePayPalOrder {
  constructor(private readonly repo: PaymentRepository) {}
  execute(amount: number) {
    return this.repo.createPayPalOrder(amount);
  }
}
