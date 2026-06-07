import type { PaymentRepository } from "../../domain/repositories/PaymentRepository";

export class CapturePayPalOrder {
  constructor(private readonly repo: PaymentRepository) {}
  execute(orderId: string) {
    return this.repo.capturePayPalOrder(orderId);
  }
}
