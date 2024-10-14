interface IValidateProps {
  email: string;
  password: string;
  confirmPassword: string;
}

export const valideRegister = ({
  email,
  password,
  confirmPassword,
}: IValidateProps): string => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (password !== confirmPassword) {
    return "Las contraseñas no coinciden";
  } else if (!emailRegex.test(email)) {
    return "El correo electrónico no es válido";
  }

  return "";
};
