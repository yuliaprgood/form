import { useUnit } from 'effector-react';
import { Button } from '../../../ui/button';
import { stepModel } from '../../../models/form-step/model';

type NextButtonProps = {
    disabled: boolean;
    text?: string;
};

const TOTAL_STEPS = 6;

export const NextButton = ({ disabled, text = 'Next' }: NextButtonProps) => {
    const [currentStep, setStep] = useUnit([
        stepModel.$currentStep,
        stepModel.setStep,
    ]);

    const onNextClick = () => {
        if (!disabled) {
            setStep(currentStep + 1);
        }
    };

    if (currentStep === TOTAL_STEPS) {
        return null;
    }

    return <Button text={text} onClick={onNextClick} disabled={disabled} />;
};
