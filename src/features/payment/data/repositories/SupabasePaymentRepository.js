import { supabase } from "../../../../core/api/supabaseClient.js";
import { PaymentRepository } from "../../domain/repositories/PaymentRepository.js";

export class SupabasePaymentRepository extends PaymentRepository {
    async createStripePaymentIntent(amount, currency, name) {
        const { data, error } = await supabase.functions.invoke('stripe', {
            body: {
                amount: amount,
                currency: currency,
                name: name ,
                'platform' : 'mobile'
            }
        });

        if (error) throw new Error(error.message);
        return data;
    }

    async createPayPalOrder(amount) {
        const { data, error } = await supabase.functions.invoke('react-paypal', {
            body: { amount: amount.toFixed(2), action: 'CREATE' }
        });

        if (error) throw new Error(error.message);
        return data;
    }

    async capturePayPalOrder(orderId) {
        const { data, error } = await supabase.functions.invoke('react-paypal', {
            body: { action: 'CAPTURE', orderId: orderId }
        });

        if (error) throw new Error(error.message);
        return data;
    }
}
