import {Form} from 'react-bootstrap';

interface IFormulaInput {
    keyFr: string;
    result: string;
    isResult: boolean;
    sample: any;
    valueInput: string;
    callBack: Function;
    callBackSetInput: Function;
    callBackSetIsResult: Function;
}

const FormulaInput = ({keyFr, result, isResult, sample, valueInput, callBack, callBackSetInput, callBackSetIsResult}: IFormulaInput) => {

    return (
        <div className="nit-flex nit-formula-container">
            {sample}
            {isResult && (
                <span className="nit-formula-answer">{result}</span>
            ) || (
                <Form.Control className="nit-formula-container-input" value={valueInput} placeholder={keyFr} onChange={(e)=>{callBack(e.target.value, callBackSetInput, callBackSetIsResult, keyFr)}}/>
            )}
        </div>
    );
}

export default FormulaInput;