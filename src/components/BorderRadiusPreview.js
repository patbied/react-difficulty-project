import { useState } from "react"
import Form from "../ui/Form"
import '../styles/Common.css'
const BorderRadiusPreview = () => {
    const [borderRadiusState, setBorderRadiusState] = useState({
        topLeft: 0,
        topRight: 0,
        bottomLeft: 0,
        bottomRight: 0,
        color: '#808080'

    })


    const changeBorderRadius = (e) => {
        setBorderRadiusState(prevState => ({...prevState, [e.target.name]: e.target.value}))
    }
   
    return <>
    <div style={{borderRadius: `${borderRadiusState.topLeft}px ${borderRadiusState.topRight}px ${borderRadiusState.bottomRight}px ${borderRadiusState.bottomLeft}px`, backgroundColor: borderRadiusState.color, width: '80%', border: '2px solid black' }}>
    <Form>
        <div className="form-div"> 
        <label htmlFor="topLeft">Top Left</label>
        <input className="form-input" id="topLeft" onChange={changeBorderRadius} name="topLeft" type="text" value={borderRadiusState.topLeft}></input>
        </div>
        <div className="form-div"> 
        <label htmlFor="topRight">Top Right</label>
        <input className="form-input" id="topRight" onChange={changeBorderRadius} name="topRight" type="text" value={borderRadiusState.topRight}></input>
        </div>
        <div className="form-div"> 
        <label htmlFor="bottomLeft">Bottom Left</label>
        <input className="form-input" id="bottomLeft" onChange={changeBorderRadius} name="bottomLeft"  type="text" value={borderRadiusState.bottomLeft}></input>
        </div>
        <div className="form-div"> 
        <label htmlFor="bottomRight">Bottom Right</label>
        <input className="form-input" id="bottomRight" onChange={changeBorderRadius} name="bottomRight" type="text" value={borderRadiusState.bottomRight}></input>
        </div>
        <div className="form-div"> 
        <label htmlFor="color">Color</label>
        <input className="form-input" id="color" onChange={changeBorderRadius} name="color" type="color" value={borderRadiusState.color}></input>
        </div>
    </Form>
    
    <div className="centered-content"> 
    <h2>Code</h2>
    <p></p>
    </div>

    </div>
    </>
}
export default BorderRadiusPreview