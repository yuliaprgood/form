import { createEvent, createStore, sample } from 'effector';

const $creditCard = createStore<string>('');
const setCreditCard = createEvent<string>('');
const $creditCardError = createStore<string>('');
const validate = createEvent();

sample({
    clock: setCreditCard,
    target: $creditCard,
});

sample({
    clock: validate,
    source: $creditCard,
    fn: (value) => (value.length !== 16 ? 'Card number is invalid' : ''),
    target: $creditCardError,
});

export const creditModel = {
    $creditCard,
    setCreditCard,
    $creditCardError,
    validate,
};
