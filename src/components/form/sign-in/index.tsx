import { useMemo } from 'react';
import { useUnit } from 'effector-react';
import { Login } from '../../form-fields/login/login';
import { Password } from '../../form-fields/password';
import { signInModel } from './model';
import { ActionButtons } from '../../action-buttons';

export const SignIn = () => {
    const [login, password, isValid] = useUnit([
        signInModel.signInForm.fields.login.$value,
        signInModel.signInForm.fields.password.$value,
        signInModel.signInForm.$isValid,
    ]);

    const canGoNext = useMemo(() => {
        return !!login && !!password && isValid;
    }, [login, password, isValid]);

    return (
        <div>
            <Login />
            <Password />
            <ActionButtons nextDisabled={!canGoNext} />
        </div>
    );
};
