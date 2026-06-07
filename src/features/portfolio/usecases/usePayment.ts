import { useMemo } from "react";
import { SupabasePaymentRepository } from "../data/repositories/SupabasePaymentRepository";
import { ProcessStripePayment } from "./payments/ProcessStripePayment";
import { CreatePayPalOrder } from "./payments/CreatePayPalOrder";
import { CapturePayPalOrder } from "./payments/CapturePayPalOrder";

export const usePayment = () => {
  const repository = useMemo(() => new SupabasePaymentRepository(), []);
  const processStripePayment = useMemo(() => new ProcessStripePayment(repository), [repository]);
  const createPayPalOrder = useMemo(() => new CreatePayPalOrder(repository), [repository]);
  const capturePayPalOrder = useMemo(() => new CapturePayPalOrder(repository), [repository]);
  return { processStripePayment, createPayPalOrder, capturePayPalOrder };
};
