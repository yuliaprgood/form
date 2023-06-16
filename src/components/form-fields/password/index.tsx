import { useField } from 'effector-forms';
import { Input } from '../../../ui/input';
import { signInModel } from '../../form/sign-in/model';

export const Password = () => {
    const { value, onChange, hasError, errors, validate } = useField(
        signInModel.signInForm.fields.password,
    );

    return (
        <>
            <Input
                label="Password"
                placeholder="Enter password..."
                value={value}
                type="password"
                onChange={(e) => onChange(e.target.value)}
                hasError={hasError()}
                errorMessage={errors?.[0]?.errorText || ''}
                onBlur={() => validate()}
            />
        </>
    );
};
