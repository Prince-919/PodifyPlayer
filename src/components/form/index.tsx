import React, {ReactNode} from 'react';
import {Formik, FormikHelpers} from 'formik';

interface Props<T> {
  initialValues: any;
  validationSchema: any;
  onSubmit(values: T, formikHelpers: FormikHelpers<any>): void;
  children: ReactNode;
}

const Form = <T extends object>(props: Props<T>) => {
  return (
    <Formik
      onSubmit={props.onSubmit}
      initialValues={props.initialValues}
      validationSchema={props.validationSchema}>
      {props.children}
    </Formik>
  );
};

export default Form;
