import { useUnit } from 'effector-react';
import styled from '@emotion/styled';
import { stepModel } from '../../models/form-step/model';
import { stepContent } from './step-content';
import { Heading } from '../../ui/heading';

export const Form = () => {
    const currentStep = useUnit(stepModel.$currentStep);

    return (
        <div>
            <Heading />
            <Wrapper>{stepContent(currentStep)}</Wrapper>
        </div>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 400px;
`;
