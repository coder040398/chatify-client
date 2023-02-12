import RegisterForm from "../components/forms/RegisterForm";
import { Page } from "../utils/styles";

export default function RegisterPage() {
  return (
    <Page display="flex" justifyContent="center" alignItems="center">
      <RegisterForm />
    </Page>
  );
}
