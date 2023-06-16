import { useUnit } from 'effector-react';
import { stepModel } from '../../models/form-step/model';

export const Heading = () => {
    const currentStep = useUnit(stepModel.$currentStep);

    return <h3>Step {currentStep}</h3>;
};
