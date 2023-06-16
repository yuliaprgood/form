import { createForm } from 'effector-forms';
import { rules } from '../../../shared/formRules';

const agreementForm = createForm({
    fields: {
        cookie: {
            init: false,
            rules: [rules.checkboxRequired],
        },
        personalData: {
            init: false,
            rules: [rules.checkboxRequired],
        },
    },
});

export const agreementModel = {
    agreementForm,
};
