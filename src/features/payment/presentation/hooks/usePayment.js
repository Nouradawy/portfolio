import { useMemo } from 'react';
import { SupabasePaymentRepository } from '../../data/repositories/SupabasePaymentRepository.js';
import { ProcessStripePayment } from '../../domain/usecases/ProcessStripePayment.js';
import { CreatePayPalOrder } from '../../domain/usecases/CreatePayPalOrder.js';
import { CapturePayPalOrder } from '../../domain/usecases/CapturePayPalOrder.js';

export const usePayment = () => {
    const repository = useMemo(() => new SupabasePaymentRepository(), []);

    const processStripePayment = useMemo(() => new ProcessStripePayment(repository), [repository]);
    const createPayPalOrder = useMemo(() => new CreatePayPalOrder(repository), [repository]);
    const capturePayPalOrder = useMemo(() => new CapturePayPalOrder(repository), [repository]);

    return {
        processStripePayment,
        createPayPalOrder,
        capturePayPalOrder
    };
};
