import { useField } from 'effector-forms';
import { Input } from '../../../ui/input';
import { personalInfoModel } from '../../form/personal-info/model';

export const FirstName = () => {
    const { value, onChange, name, errors, hasError, validate } = useField(
        personalInfoModel.personalInfoForm.fields.firstname,
    );

    return (
        <>
            <Input
                label="First name"
                placeholder="Enter firstname..."
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                name={name}
                hasError={hasError()}
                errorMessage={errors?.[0]?.errorText || ''}
                onBlur={() => validate()}
            />
        </>
    );
};
