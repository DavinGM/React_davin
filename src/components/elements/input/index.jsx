import Label from "./Label"
import Input from "./input"

const InputGroup = (props) => { 
    const { label, name, type, placeholder , text_n } = props

    return (
        <div className="mb-6">
            <Label htmlFor={name}>{label}</Label>
            <Input name={name} type={type} placeholder={placeholder} textP={text_n} /> 
        </div>
    )
}

export default InputGroup 