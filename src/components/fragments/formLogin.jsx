
import Button from "../elements/button"
import InputGroup from "../elements/input"

const FormLogin = () => {
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
        
        <Button type="submit" classname="bg-blue-600 w-full">
            Login
        </Button>

        
        </form>
    )
}

export default FormLogin




