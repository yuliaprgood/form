import { useField } from 'effector-forms';
import { Input } from '../../../ui/input';
import { signInModel } from '../../form/sign-in/model';

export const Login = () => {
    const { value, onChange, hasError, errors, validate } = useField(
        signInModel.signInForm.fields.login,
    );

    const onInputChange = (value: string) => {
        onChange(value);
    };

    return (
        <>
            <Input
                errorMessage={errors?.[0]?.errorText || ''}
                hasError={hasError()}
                label="Login"
                placeholder="Enter login..."
                value={value}
                onChange={(e) => onInputChange(e.target.value)}
                onBlur={() => validate()}
            />
        </>
    );
};
