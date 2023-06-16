import { SubscriptionField } from '../../form-fields/subscription';
import { ActionButtons } from '../../action-buttons';

export const Subscription = () => {
    return (
        <div>
            <div>Choose your subscription type</div>
            <SubscriptionField />
            <ActionButtons />
        </div>
    );
};
