import * as yup from "yup";

export default yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  email: yup
    .string()
    .email("Você deve informar um e-mail válido")
    .required("E-mail é obrigatório"),
  phone: yup
    .string()
    .required("Telefone para contato é obrigatório")
    .matches(/^[0-9()\-+ ]+$/, "Telefone inválido"),
  billing: yup.string(),
  companyName: yup.string(),
  segment: yup.string(),
  workers: yup.string(),
});
