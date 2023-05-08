import { Formik } from "formik";

import Container from "../Container/Container.js";
import { Form, Field, Layout } from "./RegisterForm.styled.js";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations.js";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (data, { resetForm }) => {
    dispatch(register(data));
    resetForm();
  };
  return (
    <Layout>
      <Container>
        <Formik
          onSubmit={handleSubmit}
          initialValues={{ name: "", email: "", password: "" }}
        >
          <Form>
            <Field type="text" name="name" placeholder="user name" />
            <Field type="email" name="email" placeholder="email" />
            <Field type="password" name="password" placeholder="password" />
            <button type="submit">sign up</button>
          </Form>
        </Formik>
      </Container>
    </Layout>
  );
};

export default RegisterForm;
