import type { PaymentRepository } from "../../domain/repositories/PaymentRepository";

export class ProcessStripePayment {
  constructor(private readonly repo: PaymentRepository) {}
  execute(amount: number, currency: string, name: string) {
    return this.repo.createStripePaymentIntent(amount, currency, name);
  }
}
