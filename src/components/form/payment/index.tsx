import { useUnit } from 'effector-react';
import { CreditCard } from '../../form-fields/credit-card';
import { ActionButtons } from '../../action-buttons';
import { creditModel } from './model';

export const Payment = () => {
    const [error, cardNumber] = useUnit([
        creditModel.$creditCardError,
        creditModel.$creditCard,
    ]);

    const canGoNext = !error && !!cardNumber;

    return (
        <div>
            <CreditCard />
            <ActionButtons nextDisabled={!canGoNext} />
        </div>
    );
};
