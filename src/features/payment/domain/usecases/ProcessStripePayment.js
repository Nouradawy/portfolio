export class ProcessStripePayment {
    constructor(paymentRepository) {
        this.paymentRepository = paymentRepository;
    }

    async execute(amount, currency, name) {
        return await this.paymentRepository.createStripePaymentIntent(amount, currency, name);
    }
}
