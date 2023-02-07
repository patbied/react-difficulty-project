import '../styles/Form.css'
const Form = (props) => {
    return (
        <form className="flex-form">
            {props.children}
        </form>
    )
}

export default Form