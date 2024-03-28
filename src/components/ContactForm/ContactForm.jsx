import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const ContactBoxSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(3, "Too Short!")
    .required("A phone number is required"),
});

const INITIAL_VALUES = {
  name: "",
  number: "",
};
const ContactForm = ({ onAdd }) => {
  const handleSubmit = (values, actions) => {
    onAdd(values);
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={handleSubmit}
        validationSchema={ContactBoxSchema}
      >
        <Form className={css.form}>
          <span className={css.span}>Name</span>
          <Field type='text' name='name' className={css.input} />
          <ErrorMessage component='p' name='name' className={css.error} />

          <span className={css.span}>Number</span>
          <Field type='text' name='number' className={css.input} />
          <ErrorMessage component='p' name='number' className={css.error} />

          <button type='submit' className={css.btn}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
