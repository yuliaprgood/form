import { createEvent, createStore, sample } from 'effector';

const $currentStep = createStore(1);
const setStep = createEvent<number>();

sample({
    clock: setStep,
    target: $currentStep,
});

export const stepModel = {
    $currentStep,
    setStep,
};
