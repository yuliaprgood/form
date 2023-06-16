import { useField } from 'effector-forms';
import { agreementModel } from '../../form/agreement/model';
import { Checkbox } from '../../../ui/checkbox';

export const PersonalDataAgreement = () => {
    const { value, onChange, name } = useField(
        agreementModel.agreementForm.fields.personalData,
    );

    return (
        <Checkbox
            value="personal"
            checked={value}
            type="checkbox"
            label="Agree to collect personal data"
            name={name}
            onChange={() => onChange(!value)}
            required
        />
    );
};
