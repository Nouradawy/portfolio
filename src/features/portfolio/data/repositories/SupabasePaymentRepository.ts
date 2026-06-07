import { paymentsSupabase } from "../paymentsSupabaseClient";
import type {
  PaymentRepository,
  StripePaymentIntentResponse,
  PayPalCreateOrderResponse,
  PayPalCaptureResponse,
} from "../../domain/repositories/PaymentRepository";

export class SupabasePaymentRepository implements PaymentRepository {
  async createStripePaymentIntent(
    amount: number,
    currency: string,
    name: string,
  ): Promise<StripePaymentIntentResponse> {
    const { data, error } = await paymentsSupabase.functions.invoke("stripe", {
      body: { amount, currency, name, platform: "mobile" },
    });
    if (error) throw new Error(error.message);
    return data as StripePaymentIntentResponse;
  }

  async createPayPalOrder(amount: number): Promise<PayPalCreateOrderResponse> {
    const { data, error } = await paymentsSupabase.functions.invoke("react-paypal", {
      body: { amount: amount.toFixed(2), action: "CREATE" },
    });
    if (error) throw new Error(error.message);
    return data as PayPalCreateOrderResponse;
  }

  async capturePayPalOrder(orderId: string): Promise<PayPalCaptureResponse> {
    const { data, error } = await paymentsSupabase.functions.invoke("react-paypal", {
      body: { action: "CAPTURE", orderId },
    });
    if (error) throw new Error(error.message);
    return data as PayPalCaptureResponse;
  }
}
