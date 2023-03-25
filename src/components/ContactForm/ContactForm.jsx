import { useDispatch, useSelector } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { selectContacts } from 'redux/selector';
import {
  ErrorText,
  SubmitForm,
  InputBox,
  Input,
  InputName,
  SubmitBtn,
} from './ContactForms';
import { addContact } from 'redux/operations';


const initialValues = {
  name: '',
  phone: '',
};

const validationSchema = Yup.object({
  name: Yup.string()
    .min(4, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phone: Yup.string()
    .min(10, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
});

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

export const ContactForm = () => {
  const dispatch = useDispatch();

  const oldContacts = useSelector(selectContacts);

  const onSubmit = ({ name, phone }) => {
    const findContact = oldContacts.find(item => item.name === name);

    if (findContact) {
      alert("You have already added this person's data to Contact list!!!");
    } else {
      dispatch(addContact({ name, phone }));
    }
  };

  const onSubmitInner = (value, { resetForm }) => {
    onSubmit(value);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmitInner}
      validationSchema={validationSchema}
    >
      <SubmitForm>
        <InputName>Name: </InputName>
        <InputBox>
          <Input type="text" name="name" required></Input>
          <FormError name="name" />
        </InputBox>
        <InputName>Number: </InputName>
        <InputBox>
          <Input
            type="tel"
            name="phone"
            placeholder="Enter phone number"
            required
          ></Input>
          <FormError name="phone" />
        </InputBox>
        <SubmitBtn type="submit">Add contact</SubmitBtn>
      </SubmitForm>
    </Formik>
  );
};
