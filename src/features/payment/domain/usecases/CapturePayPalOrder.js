export class CapturePayPalOrder {
    constructor(paymentRepository) {
        this.paymentRepository = paymentRepository;
    }

    async execute(orderId) {
        return await this.paymentRepository.capturePayPalOrder(orderId);
    }
}
