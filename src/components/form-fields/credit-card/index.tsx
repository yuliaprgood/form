import Cleave from 'cleave.js/react';
import { useUnit } from 'effector-react';
import styled from '@emotion/styled';
import { creditModel } from '../../form/payment/model';

export const CreditCard = () => {
    const [cardNo, setCreditCard, error, validate] = useUnit([
        creditModel.$creditCard,
        creditModel.setCreditCard,
        creditModel.$creditCardError,
        creditModel.validate,
    ]);

    const onCreditCardChange = (e: any) => {
        setCreditCard(e.target.rawValue);
    };

    return (
        <div>
            Credit Card number
            <Cleave
                css={{
                    width: '100%',
                    height: '40px',
                    fontsize: '18px',
                    padding: '4px 8px',
                }}
                options={{
                    creditCard: true,
                }}
                onChange={(e: any) => onCreditCardChange(e)}
                className="form-field"
                value={cardNo}
                onBlur={() => validate()}
                placeholder="0000 0000 0000 0000"
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </div>
    );
};

const ErrorMessage = styled.div`
    color: red;
`;
