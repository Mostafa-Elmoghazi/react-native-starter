import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Screen from '../components/ui/Screen';
import AppForm from '../components/ui/AppForm';
import AppFormField from '../components/ui/AppFormField';
import * as Yup from 'yup';
import AppPicker from '../components/ui/AppPicker';
import SubmitButton from '../components/ui/SubmitButton';
import AppFormPicker from './../components/ui/AppFormPicker';
import AppFormImagePicker from '../components/ui/AppFormImagePicker';
import useLocation from './../hooks/useLocation';

const categories = [
    { label: "Category 1", value: 1 },
    { label: "Category 2", value: 2 },
    { label: "Category 3", value: 3 },
    { label: "Category 4", value: 4 }
]


const UpsertItemScreen = () => {
    const [category, setCategory] = useState();
    const location = useLocation();

    const validationSchema = Yup.object().shape({
        title: Yup.string().required().label("Title"),
        price: Yup.number().required().label("Price"),
        images: Yup.array().min(1, "Please select at least one image."),
        category: Yup.object().required().nullable().label("Category"),
        description: Yup.string().required().label("Description")
    });
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{ title: "", price: "", description: "", category: null, images: [] }}
                onSubmit={values => console.log(location)}
                validationSchema={validationSchema}
            >
                <AppFormImagePicker
                    name="images"
                />
                <AppFormField
                    placeholder="Title"
                    name="title"
                />
                <AppFormField
                    placeholder="Price"
                    name="price"
                    keyboardType="numeric"
                />
                <AppFormPicker
                    name="category"
                    items={categories}
                    placeholder="Category" />
                <AppFormField
                    name="description"
                    placeholder="Description"
                    multiline={true}
                    numberOfLines={3}
                />

                <SubmitButton title="Save" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
});

export default UpsertItemScreen;