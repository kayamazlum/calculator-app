import { useReducer } from "react"
import "./Calculator.css"
import { initialState, reducer } from "../reducers/ReducersCalculator"


const CalculatorUseReducer = () => {
    
    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state)
    // console.log(state.number1)
    const handleNumber1Change = (e)=>{
        dispatch({type: "SET_NUMBER1", payload: Number(e.target.value)})
    }

    const handleNumber2Change = (e)=>{
        dispatch({type: "SET_NUMBER2", payload: Number(e.target.value)})
    }

    const handleAddition = ()=>{
        dispatch({type: "SET_RESULT", payload: state.number1 + state.number2})
    }
    
    return (
        <div className="calculator-container">
            <h1>useReducer</h1>
            <div className="form-container">
                <div className="form-group">
                    <label className="form-label" htmlFor="number1">Number 1</label>
                    <input className="form-input" type="number" id="number1" value={state.number1} onChange={handleNumber1Change}/>
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="number2">Number 2</label>
                    <input className="form-input" type="number" id="number2" value={state.number2} onChange={handleNumber2Change}/>
                </div>
                <button className="form-button" onClick={handleAddition}>Add</button>
                <div className="form-group">
                    <label className="form-label" htmlFor="result">Result</label>
                    <input className="form-input" type="number" id="result" value={state.result} readOnly/>
                </div>
            </div>
        </div>
    )
}
export default CalculatorUseReducer