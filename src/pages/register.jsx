import AuthLayouts from "../components/layouts/AuthLayouts";
import FormRegister from "../components/fragments/fromRegister";

const LoginPage = () => {
    return(
        <AuthLayouts title="Register">
            <FormRegister></FormRegister>
        </AuthLayouts> 
    )
}

export default LoginPage;