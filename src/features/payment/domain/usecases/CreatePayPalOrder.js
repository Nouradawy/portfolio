export class CreatePayPalOrder {
    constructor(paymentRepository) {
        this.paymentRepository = paymentRepository;
    }

    async execute(amount) {
        return await this.paymentRepository.createPayPalOrder(amount);
    }
}
