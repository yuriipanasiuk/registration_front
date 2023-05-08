import styled from "@emotion/styled";
import { Field as FormikFields, Form as FormikForm } from "formik";

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

export const Field = styled(FormikFields)`
  margin-bottom: 12px;
`;

export const Layout = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`;
