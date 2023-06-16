import { useField } from 'effector-forms';
import { GenderTypes } from '../../types';
import { personalInfoModel } from '../../components/form/personal-info/model';

export const Select = () => {
    const { value, onChange } = useField(
        personalInfoModel.personalInfoForm.fields.gender,
    );

    return (
        <label
            css={{
                display: 'flex',
                flexDirection: 'row',
                gap: '16px',
                alignItems: 'center',
                marginBottom: '24px',
            }}
        >
            <div>Gender:</div>
            <select
                css={{ width: '100%', height: '40px', cursor: 'pointer' }}
                name="gender"
                onChange={(e) => onChange(e.target.value as GenderTypes)}
                defaultValue={value}
            >
                <option value={GenderTypes.Male}>{GenderTypes.Male}</option>
                <option value={GenderTypes.Female}>{GenderTypes.Female}</option>
            </select>
        </label>
    );
};
