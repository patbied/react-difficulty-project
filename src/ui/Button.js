import '../styles/button.css'
const Button = props => {
    return <button className="button-class" onClick={props.onClick}>{props.children}</button>
}

export default Button