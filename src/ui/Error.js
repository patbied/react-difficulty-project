
const Error = props => {
    return (
        <div style={{display: 'inline-block'}}>
            <h3 style={{color: 'red'}}>ERROR: {props.err}</h3>
        </div>
    )
}
export default Error