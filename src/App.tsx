import React, { useState } from 'react';
import Header from './DescriptionBlocks/Header';
import FormulaInput from './DescriptionBlocks/FormulaInput';
import { LTPR, LI, LD, LKAP, LDIZ, LL, KP, F } from './DescriptionBlocks/Sample'
import { Form, Button } from 'react-bootstrap';
import data from './dataOptions';
import { answerTask1, filterOption } from './help';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/app.css';

const App = () => {
    const [isOption, setIsOption] = useState(false);
    const [optionValue, setOption] = useState('');

    const [isLTRP, setIsLTRP] = useState(false);
    const [valueLTRP, setValueLTRP] = useState('');
    const [isLI, setIsLI] = useState(false);
    const [valueLI, setValueLI] = useState('');
    const [isLD, setIsLD] = useState(false);
    const [valueLD, setValueLD] = useState('');
    const [isLKAP, setIsLKAP] = useState(false);
    const [valueLKAP, setValueLKAP] = useState('');
    const [isLDIZ, setIsLDIZ] = useState(false);
    const [valueLDIZ, setValueLDIZ] = useState('');
    const [isLL, setIsLL] = useState(false);
    const [valueLL, setValueLL] = useState('');
    const [isKP, setIsKP] = useState(false);
    const [valueKP, setValueKP] = useState('');
    const [isF, setIsF] = useState(false);
    const [valueF, setValueF] = useState('');

    const _choseOption = () => {
        const num = Number(optionValue);
        if (num > 0 && num <= 30) {
            setIsOption(true);
        }
    }
    const _setOptionInput = (event: React.ChangeEvent<HTMLInputElement>): void => { setOption(event.target.value); }

    //task1
    const _setValueTask1 = (value: string, callBacks: Function, callBacksAnswer: Function, index: string): void => {
        callBacks(value);

        const option = filterOption(optionValue);
        const isAnswer = answerTask1(option, index, value);
        if (isAnswer) {
            callBacksAnswer(true);
        }
    }

    return (
        <div className="nit">
            <Header/>
            <div className="nit-App__content">
                {!isOption && (
                    <div className="nit-App__content-option">
                        <Form.Control value={optionValue} placeholder="Введите вариант" onChange={_setOptionInput}/>
                        <Button variant="primary" type="submit" onClick={_choseOption}>Начать</Button>
                    </div>
                ) || (
                    <div>
                        <h3>1/10 - Вариант {optionValue}</h3>
                        <div className="nit-formula">
                            <div className="nit-flex nit-formula-container">
                                L<span className="nit-formula-index">ЭКВ</span> = L<span className="nit-formula-index">ТРП</span> + ΔL<span className="nit-formula-index">V</span>+ ΔL<span className="nit-formula-index">I</span> + ΔL<span className="nit-formula-index">D</span> + ΔL<span className="nit-formula-index">КАР</span> + ΔL<span className="nit-formula-index">ДИЗ</span> - ΔL<span className="nit-formula-index">L</span>K<span className="nit-formula-index">P</span> + F;
                            </div>
                            <FormulaInput keyFr="LTRP" isResult={isLTRP} sample={LTPR()} result={data[Number(optionValue) - 1].task1.LTRP.toString()} valueInput={valueLTRP} callBack={_setValueTask1} callBackSetInput={setValueLTRP} callBackSetIsResult={setIsLTRP} />
                            <FormulaInput keyFr="LI" isResult={isLI} sample={LI()} result={data[Number(optionValue) - 1].task1.LI.toString()} valueInput={valueLI} callBack={_setValueTask1} callBackSetInput={setValueLI} callBackSetIsResult={setIsLI} />
                            <FormulaInput keyFr="LD" isResult={isLD} sample={LD()} result={data[Number(optionValue) - 1].task1.LD.toString()} valueInput={valueLD} callBack={_setValueTask1} callBackSetInput={setValueLD} callBackSetIsResult={setIsLD} />
                            <FormulaInput keyFr="LKAP" isResult={isLKAP} sample={LKAP()} result={data[Number(optionValue) - 1].task1.LKAP.toString()} valueInput={valueLKAP} callBack={_setValueTask1} callBackSetInput={setValueLKAP} callBackSetIsResult={setIsLKAP} />
                            <FormulaInput keyFr="LDIZ" isResult={isLDIZ} sample={LDIZ()} result={data[Number(optionValue) - 1].task1.LDIZ.toString()} valueInput={valueLDIZ} callBack={_setValueTask1} callBackSetInput={setValueLDIZ} callBackSetIsResult={setIsLDIZ} />
                            <FormulaInput keyFr="LL" isResult={isLL} sample={LL()} result={data[Number(optionValue) - 1].task1.LL.toString()} valueInput={valueLL} callBack={_setValueTask1} callBackSetInput={setValueLL} callBackSetIsResult={setIsLL} />
                            <FormulaInput keyFr="KP" isResult={isKP} sample={KP()} result={data[Number(optionValue) - 1].task1.KP.toString()} valueInput={valueKP} callBack={_setValueTask1} callBackSetInput={setValueKP} callBackSetIsResult={setIsKP} />
                            <FormulaInput keyFr="F" isResult={isF} sample={F()} result={data[Number(optionValue) - 1].task1.F.toString()} valueInput={valueF} callBack={_setValueTask1} callBackSetInput={setValueF} callBackSetIsResult={setIsF} />
                        </div>
                    </div>
                )}
                {isLTRP && isLI && isLD && isLKAP && isLDIZ && isLL && isKP && isF && <h3>2/10</h3>}
            </div>
        </div>
    );
}

export default App;
