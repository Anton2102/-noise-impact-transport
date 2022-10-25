import React, { useState } from 'react';
import Header from './DescriptionBlocks/Header'
import { Form, Button } from 'react-bootstrap';
import data, {ITask1} from './dataOptions'
import {answerTask1, filterOption} from './help';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/app.css';


const App = () => {
    const [isOption, setIsOption] = useState(false);
    const [optionValue, setOption] = useState('');

    const [isLTRP, setIsLTRP] = useState(false);
    const [valueLTRP, setValueLTRP] = useState('');
    const [isLI, setIsLI] = useState(false);
    const [isLD, setIsLD] = useState(false);
    const [isLKAP, setIsLKAP] = useState(false);
    const [isDIZ, setIsDIZ] = useState(false);
    const [isLL, setIsLL] = useState(false);
    const [isKP, setIsKP] = useState(false);
    const [isF, setIsF] = useState(false);

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
    // const _setValueLI = (event: React.ChangeEvent<HTMLInputElement>): void => {
    //     const value = event.target.value;
    //     setValueTRP(value);
    //     if (value === data[Number(optionValue) - 1].task1.LI.toString()) {
    //         setIsTRP(true);
    //     }
    // }

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
                            <div className="nit-flex nit-formula-container">
                                L<span className="nit-formula-index">ТРП</span> + ΔL<span className="nit-formula-index">V</span> =
                                {isLTRP && (
                                    <span className="nit-formula-answer">{data[Number(optionValue) - 1].task1.LTRP}</span>
                                ) || (
                                    <Form.Control className="nit-formula-container-input" value={valueLTRP} placeholder="Введите вариант" onChange={(e)=>{_setValueTask1(e.target.value, setValueLTRP, setIsLTRP, 'LTRP')}}/>
                                )}
                            </div>
                            <div className="nit-flex nit-formula-container">
                                ΔL<span className="nit-formula-index">I</span> =
                                {isLI && (
                                    <span className="nit-formula-answer">{data[Number(optionValue) - 1].task1.LI}</span>
                                ) || (
                                    <Form.Control className="nit-formula-container-input" value={optionValue} placeholder="Введите вариант" onChange={_setOptionInput}/>
                                )}
                            </div>
                            <div className="nit-flex nit-formula-container">
                                ΔL<span className="nit-formula-index">D</span> =
                                <Form.Control className="nit-formula-container-input" value={optionValue} placeholder="Введите вариант" onChange={_setOptionInput}/>
                            </div>
                            <div className="nit-flex nit-formula-container">
                                ΔL<span className="nit-formula-index">КАР</span> =
                                <Form.Control className="nit-formula-container-input" value={optionValue} placeholder="Введите вариант" onChange={_setOptionInput}/>
                            </div>
                            <div className="nit-flex nit-formula-container">
                                ΔL<span className="nit-formula-index">ДИЗ</span> =
                                <Form.Control className="nit-formula-container-input" value={optionValue} placeholder="Введите вариант" onChange={_setOptionInput}/>
                            </div>
                            <div className="nit-flex nit-formula-container">
                                ΔL<span className="nit-formula-index">L</span> =
                                <Form.Control className="nit-formula-container-input" value={optionValue} placeholder="Введите вариант" onChange={_setOptionInput}/>
                            </div>
                            <div className="nit-flex nit-formula-container">
                                K<span className="nit-formula-index">P</span> =
                                <Form.Control className="nit-formula-container-input" value={optionValue} placeholder="Введите вариант" onChange={_setOptionInput}/>
                            </div>
                            <div className="nit-flex nit-formula-container">
                                F =
                                <Form.Control className="nit-formula-container-input" value={optionValue} placeholder="Введите вариант" onChange={_setOptionInput}/>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
