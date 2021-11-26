import React from 'react';
import { Formik, Form, ErrorMessage, FormikValues } from 'formik';
import * as Yup from 'yup';

import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import styles from './MovieForm.module.scss';

interface Props {
    action: (action: formikMovie) => void;
    initialValues: formikMovie;
}

const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    release_date: Yup.string().required('Release date is required'),
    poster_path: Yup.string().required('Movie URL is required'),
    overview: Yup.string().required('Overview is required'),
    runtime: Yup.number()
        .typeError('Runtime must be a number')
        .required('Runtime is required')
        .min(0, 'Must be minimum 0'),
    genres: Yup.array().min(1, 'Genre is required'),
});

const MovieForm: React.FC<Props> = ({ action, initialValues }) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
                action(values);
            }}
        >
            {(formik) => (
                <Form>
                    <Input
                        elementType="input"
                        label="title"
                        placeholder="Title here"
                        {...formik.getFieldProps('title')}
                    />
                    <p className={styles.error}>
                        <ErrorMessage name="title" />
                    </p>
                    <Input
                        elementType="date"
                        label="release date"
                        placeholder="Select date"
                        {...formik.getFieldProps('release_date')}
                    />
                    <p className={styles.error}>
                        <ErrorMessage name="release_date" />
                    </p>
                    <Input
                        elementType="select"
                        label="genres"
                        value={formik.values.genres}
                        onChange={formik.setFieldValue}
                    />
                    <p className={styles.error}>
                        <ErrorMessage name="genres" />
                    </p>
                    <Input
                        elementType="url"
                        label="movie url"
                        placeholder="Movie URL here"
                        {...formik.getFieldProps('poster_path')}
                    />
                    <p className={styles.error}>
                        <ErrorMessage name="poster_path" />
                    </p>
                    <Input
                        elementType="text"
                        label="overview"
                        placeholder="Overview here"
                        {...formik.getFieldProps('overview')}
                    />
                    <p className={styles.error}>
                        <ErrorMessage name="overview" />
                    </p>
                    <Input
                        elementType="text"
                        label="runtime"
                        placeholder="Runtime here"
                        {...formik.getFieldProps('runtime')}
                    />
                    <p className={styles.error}>
                        <ErrorMessage name="runtime" />
                    </p>
                    <div className={styles.buttons}>
                        <Button onClick={formik.handleReset} type="button" title="reset" styleType="reset" />
                        <Button type="submit" title="submit" styleType="submit" />
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default MovieForm;
