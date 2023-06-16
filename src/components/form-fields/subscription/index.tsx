import { useUnit } from 'effector-react';
import { SubscriptionTypes } from '../../../types';
import { subscriptionModel } from '../../form/subscription/model';
import { Checkbox } from '../../../ui/checkbox';

export const SubscriptionField = () => {
    const [value, setValue] = useUnit([
        subscriptionModel.$subscription,
        subscriptionModel.setSubscription,
    ]);

    return (
        <div>
            <Checkbox
                value={SubscriptionTypes.Free}
                type="radio"
                label={SubscriptionTypes.Free}
                name="subscription"
                checked={value === SubscriptionTypes.Free}
                onChange={() => setValue(SubscriptionTypes.Free)}
            />
            <Checkbox
                value={SubscriptionTypes.Monthly}
                type="radio"
                label={SubscriptionTypes.Monthly}
                name="subscription"
                checked={value === SubscriptionTypes.Monthly}
                onChange={() => setValue(SubscriptionTypes.Monthly)}
            />
            <Checkbox
                value={SubscriptionTypes.Yearly}
                type="radio"
                label={SubscriptionTypes.Yearly}
                name="subscription"
                checked={value === SubscriptionTypes.Yearly}
                onChange={() => setValue(SubscriptionTypes.Yearly)}
            />
        </div>
    );
};
