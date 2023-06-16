import { useUnit } from 'effector-react';
import styled from '@emotion/styled';
import { ActionButtons } from '../../action-buttons';
import { signInModel } from '../sign-in/model';
import { personalInfoModel } from '../personal-info/model';
import { subscriptionModel } from '../subscription/model';
import { creditModel } from '../payment/model';

export const Final = () => {
    const [
        login,
        password,
        firstname,
        lastname,
        middlename,
        email,
        gender,
        subscription,
        creditNo,
    ] = useUnit([
        signInModel.signInForm.fields.login.$value,
        signInModel.signInForm.fields.password.$value,
        personalInfoModel.personalInfoForm.fields.firstname.$value,
        personalInfoModel.personalInfoForm.fields.lastname.$value,
        personalInfoModel.personalInfoForm.fields.middlename.$value,
        personalInfoModel.personalInfoForm.fields.email.$value,
        personalInfoModel.personalInfoForm.fields.gender.$value,
        subscriptionModel.$subscription,
        creditModel.$creditCard,
    ]);

    return (
        <Wrapper>
            <div>Your login: {login}</div>
            <div>Your password: {password}</div>
            <div>Firstname: {firstname}</div>
            <div>Lastname: {lastname}</div>
            <div>Middlename: {middlename}</div>
            <div>Email: {email}</div>
            <div>Gender: {gender}</div>
            <div>Subscription type: {subscription}</div>
            <div>Credit card: {creditNo}</div>
            <ActionButtons />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
`;
