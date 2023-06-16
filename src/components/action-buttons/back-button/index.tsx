import { useUnit } from 'effector-react';
import { Button } from '../../../ui/button';
import { stepModel } from '../../../models/form-step/model';

type BackButtonProps = {
    disabled?: boolean;
    text?: string;
};

export const BackButton = ({ disabled, text = 'Back' }: BackButtonProps) => {
    const [currentStep, setStep] = useUnit([
        stepModel.$currentStep,
        stepModel.setStep,
    ]);

    const onNextClick = () => {
        if (!disabled) {
            setStep(currentStep - 1);
        }
    };

    if (currentStep === 1) {
        return null;
    }

    return <Button text={text} onClick={onNextClick} disabled={disabled} />;
};
