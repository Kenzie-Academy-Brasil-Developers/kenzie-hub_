import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Nome obrigatório!"),
  email: yup
    .string()
    .email("Esse campo deve ser um email")
    .required("Email obrigatório!"),
  password: yup
    .string()
    .required("Senha obrigatória!")
    .matches(/[a-z]/, "É necessario conter letras")
    .matches(/.{8,}/, "É necessario ter no mínimo 8 caracteres")
    .matches(/(\d)/, "É necessario ter numeros")
    .matches(/\W|_/, "É necessario caracteres especiais. Ex: @!#"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas devem ser iguais")
    .required("Confirmação obrigatória!"),
  bio: yup.string().required("Bio obrigatória!"),
  contact: yup.string().required("Contato obrigatório!"),
  course_module: yup.string().required("Modulo obrigatório!"),
});

export default schema;
