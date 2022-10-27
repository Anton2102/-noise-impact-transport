import React, { useState } from 'react';
import Header from './DescriptionBlocks/Header';
import FormulaInput from './DescriptionBlocks/FormulaInput';
import { LTPR, LI, LD, LKAP, LDIZ, LL, KP, F, LEKV, WMAX, AZEL } from './DescriptionBlocks/Sample'
import { Form, Button } from 'react-bootstrap';
import data from './dataOptions';
import { answerTask1, answerTask2, answerTask3, answerTask4, filterOption } from './help';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/app.css';

const App = () => {
    const [isOption, setIsOption] = useState(false);
    const [optionValue, setOption] = useState('');
    const [isShowTask2, setIsShowTask2] = useState(false);
    const [isShowTask3, setIsShowTask3] = useState(false);
    const [isShowTask4, setIsShowTask4] = useState(false);
    //const [isShowTask5, setIsShowTask5] = useState(false);

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

    const [isLEKV, setIsLEKV] = useState(false);
    const [valueLEKV, setValueLEKV] = useState('');

    const [isWMAX, setIsWMAX] = useState(false);
    const [valueWMAX, setValueWMAX] = useState('');

    const [isAZEL, setIsAZEL] = useState(false);
    const [valueAZEL, setValueAZEL] = useState('');

    const _choseOption = () => {
        const num = Number(optionValue);
        if (num > 0 && num <= 30) {
            setIsOption(true);
        }
    }
    const _setOptionInput = (event: React.ChangeEvent<HTMLInputElement>): void => { setOption(event.target.value); }

    const _setValueTask = (value: string, callBacks: Function, callBacksAnswer: Function, index: string, task: string): void => {
        callBacks(value);

        const option = filterOption(optionValue, task);
        const answerFn = _getAnswerTask(task);

        if (answerFn(option, index, value)) {
            callBacksAnswer(true);
        }
    }

    const _getAnswerTask = (task: string): Function => {
        switch (task) {
            case 'task1': return answerTask1;
            case 'task2': return answerTask2;
            case 'task3': return answerTask3;
            case 'task4': return answerTask4;
        }
        return () => {};
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
                    <>
                        <h3>1/10 - Вариант {optionValue}</h3>
                        <div className="nit-formula">
                            <div className="nit-flex nit-formula-container">
                                L<span className="nit-formula-index">ЭКВ</span> = L<span className="nit-formula-index">ТРП</span> + ΔL<span className="nit-formula-index">V</span>+ ΔL<span className="nit-formula-index">I</span> + ΔL<span className="nit-formula-index">D</span> + ΔL<span className="nit-formula-index">КАР</span> + ΔL<span className="nit-formula-index">ДИЗ</span> - ΔL<span className="nit-formula-index">L</span>K<span className="nit-formula-index">P</span> + F;
                            </div>
                            <FormulaInput keyFr="LTRP" task="task1" isResult={isLTRP} sample={LTPR()} result={data[Number(optionValue) - 1].task1.LTRP.toString()} valueInput={valueLTRP} callBack={_setValueTask} callBackSetInput={setValueLTRP} callBackSetIsResult={setIsLTRP} />
                            <FormulaInput keyFr="LI" task="task1" isResult={isLI} sample={LI()} result={data[Number(optionValue) - 1].task1.LI.toString()} valueInput={valueLI} callBack={_setValueTask} callBackSetInput={setValueLI} callBackSetIsResult={setIsLI} />
                            <FormulaInput keyFr="LD" task="task1" isResult={isLD} sample={LD()} result={data[Number(optionValue) - 1].task1.LD.toString()} valueInput={valueLD} callBack={_setValueTask} callBackSetInput={setValueLD} callBackSetIsResult={setIsLD} />
                            <FormulaInput keyFr="LKAP" task="task1" isResult={isLKAP} sample={LKAP()} result={data[Number(optionValue) - 1].task1.LKAP.toString()} valueInput={valueLKAP} callBack={_setValueTask} callBackSetInput={setValueLKAP} callBackSetIsResult={setIsLKAP} />
                            <FormulaInput keyFr="LDIZ" task="task1" isResult={isLDIZ} sample={LDIZ()} result={data[Number(optionValue) - 1].task1.LDIZ.toString()} valueInput={valueLDIZ} callBack={_setValueTask} callBackSetInput={setValueLDIZ} callBackSetIsResult={setIsLDIZ} />
                            <FormulaInput keyFr="LL" task="task1" isResult={isLL} sample={LL()} result={data[Number(optionValue) - 1].task1.LL.toString()} valueInput={valueLL} callBack={_setValueTask} callBackSetInput={setValueLL} callBackSetIsResult={setIsLL} />
                            <FormulaInput keyFr="KP" task="task1" isResult={isKP} sample={KP()} result={data[Number(optionValue) - 1].task1.KP.toString()} valueInput={valueKP} callBack={_setValueTask} callBackSetInput={setValueKP} callBackSetIsResult={setIsKP} />
                            <FormulaInput keyFr="F" task="task1" isResult={isF} sample={F()} result={data[Number(optionValue) - 1].task1.F.toString()} valueInput={valueF} callBack={_setValueTask} callBackSetInput={setValueF} callBackSetIsResult={setIsF} />
                        </div>
                        {isLTRP && isLI && isLD && isLKAP && isLDIZ && isLL && isKP && isF && <Button variant="dark" onClick={() => setIsShowTask2(true)}>Дальше</Button>}
                    </>
                )}
                {isShowTask2 && (
                    <>
                        <h3>2/10</h3>
                        <div className="nit-formula">
                            <FormulaInput keyFr="LEKV" task="task2" isResult={isLEKV} sample={LEKV()} result={data[Number(optionValue) - 1].task2.LEKV.toString()} valueInput={valueLEKV} callBack={_setValueTask} callBackSetInput={setValueLEKV} callBackSetIsResult={setIsLEKV} />
                        </div>
                        {isLEKV && <Button variant="dark" onClick={() => setIsShowTask3(true)}>Дальше</Button>}
                    </>
                )}
                {isShowTask3 && (
                    <>
                        <h3>3/10</h3>
                        <div className="nit-formula">
                            <FormulaInput keyFr="WMAX" task="task3" isResult={isWMAX} sample={WMAX()} result={data[Number(optionValue) - 1].task3.WMAX.toString()} valueInput={valueWMAX} callBack={_setValueTask} callBackSetInput={setValueWMAX} callBackSetIsResult={setIsWMAX} />
                        </div>
                        {isWMAX && <Button variant="dark" onClick={() => setIsShowTask4(true)}>Дальше</Button>}
                    </>
                )}
                {isShowTask4 && (
                    <>
                        <h3>4/10</h3>
                        <div className="nit-formula">
                            <FormulaInput keyFr="AZEL" task="task4" isResult={isAZEL} sample={AZEL()} result={data[Number(optionValue) - 1].task4.AZEL.toString()} valueInput={valueAZEL} callBack={_setValueTask} callBackSetInput={setValueAZEL} callBackSetIsResult={setIsAZEL} />
                        </div>
                        {isAZEL && <Button variant="dark" onClick={() => setIsShowTask5(true)}>Дальше</Button>}
                    </>
                )}
            </div>
        </div>
    );
}

export default App;
