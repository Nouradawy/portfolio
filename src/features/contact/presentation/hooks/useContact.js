import { useMemo } from 'react';
import { EmailJSContactRepository } from '../../data/repositories/EmailJSContactRepository.js';
import { SendContactMessage } from '../../domain/usecases/SendContactMessage.js';

export const useContact = () => {
    const repository = useMemo(() => new EmailJSContactRepository(
        'service_r1ni6b5',
        'template_m3rty6b',
        'Ef9RY5lEbWGrgd73s'
    ), []);

    const sendContactMessage = useMemo(() => new SendContactMessage(repository), [repository]);

    return {
        sendContactMessage
    };
};
