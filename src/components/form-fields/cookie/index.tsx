import { useField } from 'effector-forms';
import { agreementModel } from '../../form/agreement/model';
import { Checkbox } from '../../../ui/checkbox';

export const Cookie = () => {
    const { value, onChange } = useField(
        agreementModel.agreementForm.fields.cookie,
    );

    return (
        <Checkbox
            value="cookie"
            checked={value}
            type="checkbox"
            label="Site uses cookie"
            onChange={() => onChange(!value)}
            required
        />
    );
};
