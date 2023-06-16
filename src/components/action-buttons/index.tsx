import styled from '@emotion/styled';
import { BackButton } from './back-button';
import { NextButton } from './next-button';

export type ActionButtonsProps = {
    nextDisabled?: boolean;
};

export const ActionButtons = ({ nextDisabled = false }: ActionButtonsProps) => {
    return (
        <Wrapper>
            <BackButton />
            <NextButton disabled={nextDisabled} />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 32px;
    margin-top: 32px;
`;
