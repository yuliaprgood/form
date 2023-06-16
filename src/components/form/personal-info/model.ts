import { createForm } from 'effector-forms';
import { rules } from '../../../shared/formRules';
import { GenderTypes } from '../../../types';

const personalInfoForm = createForm({
    fields: {
        firstname: {
            init: '',
            rules: [rules.required, rules.name],
        },
        lastname: {
            init: '',
            rules: [rules.required],
        },
        middlename: {
            init: '',
        },
        email: {
            init: '',
            rules: [rules.required, rules.email],
        },
        gender: {
            init: GenderTypes.Male,
            rules: [rules.required],
        },
        birthDate: {
            init: '',
        },
        age: {
            init: false,
            rules: [rules.checkboxRequired],
        },
    },
});

export const personalInfoModel = {
    personalInfoForm,
};
