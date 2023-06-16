import { SignIn } from './sign-in';
import { Subscription } from './subscription';
import { PersonalInfo } from './personal-info';
import { Payment } from './payment';
import { Final } from './final';
import { Agreement } from './agreement';

export const stepContent = (step: number) => {
    switch (step) {
        case 1:
            return <SignIn />;
        case 2:
            return <Subscription />;
        case 3:
            return <PersonalInfo />;
        case 4:
            return <Payment />;
        case 5:
            return <Agreement />;
        case 6:
            return <Final />;
        default:
            return <SignIn />;
    }
};
