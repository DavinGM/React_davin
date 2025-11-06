import FromLogin from "../components/fragments/FormLogin";
import AuthLayouts from "../components/layouts/AuthLayouts";

const LoginPage = () => {
    return(
        <AuthLayouts title="login">
            <FromLogin></FromLogin>
        </AuthLayouts> 
    )
}

export default LoginPage;