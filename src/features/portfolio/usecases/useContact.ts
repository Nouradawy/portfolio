import { useMemo } from "react";
import { EmailJSContactRepository } from "../data/repositories/EmailJSContactRepository";
import { SendContactMessage } from "./SendContactMessage";

// Keys preserved from the original useContact.js (EmailJS public client keys).
const SERVICE_ID = "service_r1ni6b5";
const TEMPLATE_ID = "template_m3rty6b";
const PUBLIC_KEY = "Ef9RY5lEbWGrgd73s";

export function useContact() {
  const repository = useMemo(
    () => new EmailJSContactRepository(SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY),
    [],
  );
  const sendContactMessage = useMemo(() => new SendContactMessage(repository), [repository]);
  return { sendContactMessage };
}
