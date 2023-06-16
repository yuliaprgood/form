import { useUnit } from 'effector-react';
import styled from '@emotion/styled';
import { Cookie } from '../../form-fields/cookie';
import { PersonalDataAgreement } from '../../form-fields/personal-data-agreement';
import { ActionButtons } from '../../action-buttons';
import { signInModel } from '../sign-in/model';
import { agreementModel } from './model';

export const Agreement = () => {
    const [login, password, cookie, personal, isValid] = useUnit([
        signInModel.signInForm.fields.login.$value,
        signInModel.signInForm.fields.password.$value,
        agreementModel.agreementForm.fields.cookie.$value,
        agreementModel.agreementForm.fields.personalData.$value,
        agreementModel.agreementForm.$isValid,
    ]);

    const canGoNext = cookie && personal && isValid;

    return (
        <Wrapper>
            <div>Your login: {login}</div>
            <div>Your password: {password}</div>
            <Cookie />
            <PersonalDataAgreement />
            <ActionButtons nextDisabled={!canGoNext} />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    gap: 8px;
`;
