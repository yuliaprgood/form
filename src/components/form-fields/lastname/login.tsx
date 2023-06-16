import { useField } from 'effector-forms';
import { Input } from '../../../ui/input';
import { personalInfoModel } from '../../form/personal-info/model';

export const LastName = () => {
    const { value, onChange, name, errors, hasError, validate } = useField(
        personalInfoModel.personalInfoForm.fields.lastname,
    );

    return (
        <>
            <Input
                label="Last name"
                placeholder="Enter last name..."
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                hasError={hasError()}
                errorMessage={errors?.[0]?.errorText || ''}
                onBlur={() => validate()}
                name={name}
            />
        </>
    );
};
