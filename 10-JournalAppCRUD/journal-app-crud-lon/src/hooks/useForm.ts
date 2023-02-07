import { useEffect, useMemo, useState } from "react";


export const useForm = (initialFormState: Object = {}, initialFormValidation: Object = {}, formValidations: any = {}) => {
    const [formState, setFormState] = useState(initialFormState) as [formState: any, setFormState: any];
    // const { user, email, pass } = formState;
    const [formValidation, setFormValidation] = useState(initialFormValidation) as [formValidation: any, setFormValidation: any];

    useEffect(() => {
        createValidators();
    }, [formState])

    // const isFormValid = useMemo(() => {
    //     for(const formValue of Object.keys(formValidation)){
    //         if(formValidation[formValue] !== null) return false;
    //     }
    //     return true;
    // }, [formValidation]);

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = event;
        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value,
        })

    }
    const onResetForm = () => {
        setFormState(initialFormState);
    }
    const onSubmitForm = () => {
        setFormState({
            ...formState,
            isSubmited: true,
        });
    }

    const createValidators = () => {
        const formCheckedValues: any = { isFormValid: true };
        for (const formField of Object.keys(formValidations)) {

            const [fn, errorMessage] = formValidations[formField] as [fn: Function, errorMessage: string];
            formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? '' : errorMessage;
            formCheckedValues['isFormValid'] = formCheckedValues['isFormValid'] && fn(formState[formField]);
        }
        setFormValidation(formCheckedValues);
    }

    return {
        ...formState,
        formState,
        ...formValidation,
        formValidation,
        onInputChange,
        onResetForm,
        onSubmitForm,


    }
}
