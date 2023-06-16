import { createEvent, createStore, sample } from 'effector';
import { createForm } from 'effector-forms';
import { rules } from '../../shared/formRules';
import { SubscriptionTypes } from '../../types';

const $subscription = createStore<SubscriptionTypes>(SubscriptionTypes.Monthly);
const setSubscription = createEvent<SubscriptionTypes>();
sample({
    clock: setSubscription,
    target: $subscription,
});

const $firstname = createStore('');
const $firstnameError = createStore<string>('');
const setFirstname = createEvent<string>();

sample({
    clock: setFirstname,
    target: $firstname,
});

sample({
    clock: $firstname,
    fn: (value) => {
        return value ? '' : 'This field is required';
    },
    target: $firstnameError,
});

const $lastname = createStore('');
const $lastnameError = createStore<string>('');
const setLastname = createEvent<string>();

sample({
    clock: setLastname,
    target: $lastname,
});

sample({
    clock: $lastname,
    fn: (value) => {
        return value ? '' : 'This field is required';
    },
    target: $lastnameError,
});

const loginForm = createForm({
    fields: {
        login: {
            init: '',
            rules: [rules.required, rules.name],
        },
        password: {
            init: '',
            rules: [rules.required],
        },
    },
});

const validate = createEvent();

sample({
    clock: validate,
    target: loginForm.validate,
});

export const formModel = {
    loginForm,
    validate,
    $subscription,
    setSubscription,
    $firstname,
    $firstnameError,
    setFirstname,
    $lastname,
    setLastname,
    $lastnameError,
};
