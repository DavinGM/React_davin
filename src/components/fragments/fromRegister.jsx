
import Button from "../elements/button"
import InputGroup from "../elements/input"

const FormRegister = () => {
    return( 
<form action=""> 
        <InputGroup 
        label="Email"
        name="email"
        type="email" 
        placeholder="Masukkan Email" 
        text_n="you need it" />


        <InputGroup 
        label="Password" 
        name="password" 
        type="password" 
        placeholder="Masukkan Password" 
        text_n="char minimum 8" />


        <InputGroup
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        placeholder="Konfirmasi Pasword Anda"
        text_n="ture">
        </InputGroup>

        <Button type="submit" classname="bg-blue-600 w-full">
            Register
        </Button>

        
        </form>
    )
}

export default FormRegister




