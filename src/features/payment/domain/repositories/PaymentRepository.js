/**
 * Interface for Payment Repository
 */
export class PaymentRepository {
    async createStripePaymentIntent(amount, currency, name) {
        throw new Error("Method not implemented");
    }

    async createPayPalOrder(amount) {
        throw new Error("Method not implemented");
    }

    async capturePayPalOrder(orderId) {
        throw new Error("Method not implemented");
    }
}
