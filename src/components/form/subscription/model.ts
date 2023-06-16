import { createEvent, createStore, sample } from 'effector';
import { SubscriptionTypes } from '../../../types';

const $subscription = createStore<SubscriptionTypes>(SubscriptionTypes.Monthly);
const setSubscription = createEvent<SubscriptionTypes>();
sample({
    clock: setSubscription,
    target: $subscription,
});

export const subscriptionModel = {
    $subscription,
    setSubscription,
};
