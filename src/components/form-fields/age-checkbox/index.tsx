import { useField } from 'effector-forms';
import { personalInfoModel } from '../../form/personal-info/model';
import { Checkbox } from '../../../ui/checkbox';

export const Age = () => {
    const { value, onChange } = useField(
        personalInfoModel.personalInfoForm.fields.age,
    );

    return (
        <Checkbox
            value="age"
            checked={value}
            type="checkbox"
            label="You are older 18"
            onChange={() => onChange(!value)}
        />
    );
};
