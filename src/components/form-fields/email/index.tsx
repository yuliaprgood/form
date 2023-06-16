import { useField } from 'effector-forms';
import { Input } from '../../../ui/input';
import { personalInfoModel } from '../../form/personal-info/model';

export const Email = () => {
    const { value, onChange, name, errors, hasError, validate } = useField(
        personalInfoModel.personalInfoForm.fields.email,
    );

    return (
        <>
            <Input
                label="Email"
                placeholder="Enter email..."
                name={name}
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                hasError={hasError()}
                errorMessage={errors?.[0]?.errorText || ''}
                onBlur={() => validate()}
            />
        </>
    );
};
