import React from 'react';
import { useFormikContext } from 'formik';
import AppPicker from './AppPicker';
import ErrorMessage from './ErrorMessage';

const AppFormPicker = ({ name, items, placeholder }) => {
    const { setFieldValue, errors, handleChange, touched, values } = useFormikContext();
    return (
        <>
            <AppPicker
                items={items}
                placeholder={placeholder}
                onSelectItem={item => setFieldValue(name, item)}
                selectedItem={values[name]}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default AppFormPicker;