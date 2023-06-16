import { useField } from 'effector-forms';
import { Input } from '../../../ui/input';
import { personalInfoModel } from '../../form/personal-info/model';

export const MiddleName = () => {
    const { value, onChange, name } = useField(
        personalInfoModel.personalInfoForm.fields.middlename,
    );

    return (
        <>
            <Input
                label="Middle name"
                placeholder="Enter middle name..."
                name={name}
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </>
    );
};
