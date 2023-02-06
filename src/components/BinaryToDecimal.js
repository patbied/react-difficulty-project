import { useState } from "react"
import Error from "../ui/Error"
const BinaryToDecimal = props => {
    const [binary, setBinary] = useState()
    const [decimal, setDecimal] = useState('')
    const [error, setError] = useState(false)

    const calculateDecimalValue = (binaryValue) => {
        let arrayBinary =  binaryValue.toString().split('')
        // console.log(arrayBinary)
        let decimalSum = 0
        let exponentPower = arrayBinary.length-1
        // console.log(arrayBinary.length)
        //For each element in my array
        for (var index=0;index<=arrayBinary.length; index++){
            //1 represents an on state so we dont care if its 0           
            if (arrayBinary[index] === '1'){
                //The sum will be equal to 2 the the power of exponentPower.
                //So if theres 5 elements 
                //[1,0,0,0,0]
                //The sum will be 2^5
                decimalSum+=Math.pow(2,exponentPower)
            }
            exponentPower--
           

        
        }
        return decimalSum
      
    }
    const changeBinaryHandler = (e) => {
        let arrayBinary = e.target.value.split('')
        if (e.target.value.length > 8){
            setError("MAX 8 CHARS")
            return
        } 
        for (let index=0;index<arrayBinary.length;index++){
            if (arrayBinary[index] !== '1' && arrayBinary[index] !== '0'){
                setError("INPUT MUST BE EITHER A '1' OR A '0'")
                return
            }
        }
        setError('')
        setBinary(e.target.value)
        setDecimal(calculateDecimalValue(e.target.value))
    }
    return (
        <>
        <form> 
        <input value={binary || ''} onChange={changeBinaryHandler} style={{margin: '10px'}} placeholder="BINARY"/>
        =
        <input style={{margin: '10px'}} value={decimal} readOnly placeholder="DECIMAL"/>
        </form>
        {error ? <Error err={error}/> : ''}
        </>
    )
}

export default BinaryToDecimal