import { Formik } from "formik";

import Container from "../Container/Container.js";
import { Form, Field, Layout } from "./LoginForm.styled.js";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations.js";

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (data, { resetForm }) => {
    dispatch(login(data));
    resetForm();
  };
  return (
    <Layout>
      <Container>
        <Formik
          onSubmit={handleSubmit}
          initialValues={{ email: "", password: "" }}
        >
          <Form>
            <Field type="email" name="email" placeholder="email" />
            <Field type="password" name="password" placeholder="password" />
            <button type="submit">sign in</button>
          </Form>
        </Formik>
      </Container>
    </Layout>
  );
};

export default LoginForm;
