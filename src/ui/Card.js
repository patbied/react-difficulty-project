import '../styles/Card.css'
const Card = props => {
    return (
        <div className="Card-body">
            <h1>{props.title}</h1>
            {props.children}
        </div>
    )
}

export default Card