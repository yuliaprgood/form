import { useUnit } from 'effector-react';
import { FirstName } from '../../form-fields/firstname';
import { LastName } from '../../form-fields/lastname/login';
import { Age } from '../../form-fields/age-checkbox';
import { MiddleName } from '../../form-fields/middlename';
import { Email } from '../../form-fields/email';
import { Select } from '../../../ui/select';
import { ActionButtons } from '../../action-buttons';
import { personalInfoModel } from './model';

export const PersonalInfo = () => {
    const [firstname, lastname, email, age, isValid] = useUnit([
        personalInfoModel.personalInfoForm.fields.firstname.$value,
        personalInfoModel.personalInfoForm.fields.lastname.$value,
        personalInfoModel.personalInfoForm.fields.email.$value,
        personalInfoModel.personalInfoForm.fields.age.$value,
        personalInfoModel.personalInfoForm.$isValid,
    ]);

    const canGoNext = !!firstname && !!lastname && !!email && age && isValid;

    return (
        <div>
            <FirstName />
            <LastName />
            <MiddleName />
            <Email />
            <Select />
            <Age />
            <ActionButtons nextDisabled={!canGoNext} />
        </div>
    );
};
