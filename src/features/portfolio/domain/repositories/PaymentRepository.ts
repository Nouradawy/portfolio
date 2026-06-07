export interface StripePaymentIntentResponse {
  clientSecret: string;
}

export interface PayPalCreateOrderResponse {
  id: string;
  [key: string]: unknown;
}

export interface PayPalCaptureResponse {
  id: string;
  status: string;
  [key: string]: unknown;
}

export interface PaymentRepository {
  createStripePaymentIntent(
    amount: number,
    currency: string,
    name: string,
  ): Promise<StripePaymentIntentResponse>;
  createPayPalOrder(amount: number): Promise<PayPalCreateOrderResponse>;
  capturePayPalOrder(orderId: string): Promise<PayPalCaptureResponse>;
}
