import React, { useState } from 'react';
import Header from './DescriptionBlocks/Header';
import FormulaInput from './DescriptionBlocks/FormulaInput';
import { LTPR, LI, LD, LKAP, LDIZ, LL, KP, F, LEKV, WMAX, AZEL, B, AECRB, YGL, AECR, L, H } from './DescriptionBlocks/Sample'
import { Button } from 'react-bootstrap';
import data from './dataOptions';
import { answerTask1, answerTask2, answerTask3, answerTask4, answerTask5, answerTask6, answerTask7, answerTask8, filterOption } from './help';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/app.css';
import ModalResult from "./DescriptionBlocks/ModalResult";

const App = () => {
    /**
     * Хуки отвечающие за раскрытие блоков(task-ов)
     */
    const [isOption, setIsOption] = useState(false);
    const [optionValue, setOption] = useState('');
    const [isShowTask2, setIsShowTask2] = useState(false);
    const [isShowTask3, setIsShowTask3] = useState(false);
    const [isShowTask4, setIsShowTask4] = useState(false);
    const [isShowTask5, setIsShowTask5] = useState(false);
    const [isShowTask6, setIsShowTask6] = useState(false);
    const [isShowTask7, setIsShowTask7] = useState(false);
    const [isShowTask8, setIsShowTask8] = useState(false);
    const [lgShow, setLgShow] = useState(false);

    /**
     * task1
     */
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

    /**
     * task2
     */
    const [isLEKV, setIsLEKV] = useState(false);
    const [valueLEKV, setValueLEKV] = useState('');

    /**
     * task3
     */
    const [isWMAX, setIsWMAX] = useState(false);
    const [valueWMAX, setValueWMAX] = useState('');

    /**
     * task4
     */
    const [isAZEL, setIsAZEL] = useState(false);
    const [valueAZEL, setValueAZEL] = useState('');

    /**
     * task5
     */
    const [isB, setIsB] = useState(false);
    const [valueB, setValueB] = useState('');
    const [valueH, setValueH] = useState('');
    const [valueBHelp, setValueBHelp] = useState('');

    /**
     * task6
     */
    const [isAECRB, setIsAECRB] = useState(false);
    const [valueAECRB, setValueAECRB] = useState('');

    /**
     * task7
     */
    const [isYGL, setIsYGL] = useState(false);
    const [valueYGL, setValueYGL] = useState('');
    const [isAECR, setIsAECR] = useState(false);
    const [valueAECR, setValueAECR] = useState('');

    /**
     * task8
     */
    const [isL, setIsL] = useState(false);
    const [valueL, setValueL] = useState('');

    /**
     * Всего 30 вариантов, если выбран подходящий, раскрываем task1
     */
    const _choseOption = () => {
        const num = Number(optionValue);
        if (num > 0 && num <= 30) {
            setIsOption(true);
        }
    }
    /**
     * Input - с выбором варианта
     * @param event
     */
    const _setOptionInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setOption(event.target.value);
    }

    /**
     *
     * @param value - содержимое Input-а
     * @param callBacks - Функция-Коллбэк
     * @param callBacksAnswer
     * @param index
     * @param task
     */
    const _setValueTask = (value: string, callBacks: Function, callBacksAnswer: Function, index: string, task: string): void => {
        callBacks(value);

        const option = filterOption(optionValue, task);
        const answerFn = _getAnswerTask(task);

        if (answerFn(option, index, value)) {
            callBacksAnswer(true);
        }
    }

    /**
     * Определяем и возрощаем функцию-коллбэк обработчик по сооветсвующему taskId
     * @param task
     */
    const _getAnswerTask = (task: string): Function => {
        switch (task) {
            case 'task1': return answerTask1;
            case 'task2': return answerTask2;
            case 'task3': return answerTask3;
            case 'task4': return answerTask4;
            case 'task5': return answerTask5;
            case 'task6': return answerTask6;
            case 'task7': return answerTask7;
            case 'task8': return answerTask8;
        }
        return () => {};
    }

    const _checkTask5 = (): void => {
        const h = data[Number(optionValue) - 1].task5.h;
        if (h > Number(valueH)) {
            setValueBHelp('after')
        } else if (h < Number(valueH)) {
            setValueBHelp('do')
        } else {
            setValueBHelp('er');
        }
    }

    const _getHelpTask5 = (): string => {
        switch (valueBHelp) {
            case 'do': return 'Понизьте значение h';
            case 'after': return 'Повысьте значение h';
            default: return 'Ваши расчеты не верны';
        }
    }

    return (
        <div className="nit">
            <Header optionValue={optionValue} callBack={_setOptionInput} buttonCallBack={_choseOption} isOption={isOption}/>
            <div className="nit-App__content">
                {isOption && (
                    <>
                        <div className="nit-flex nit-justify-content-center nit-App__content-h3">
                            <h3>1/8 - Вариант {optionValue}</h3>
                            {isLTRP && isLI && isLD && isLKAP && isLDIZ && isLL && isKP && isF && <Button className="nit-App__content-h3-nextButton" variant="dark" onClick={() => setIsShowTask2(true)}>Дальше</Button>}
                        </div>
                        <div id="task1" className="nit-formula">
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
                    </>
                )}
                {isShowTask2 && (
                    <>
                        <div className="nit-flex nit-justify-content-center nit-App__content-h3">
                            <h3>2/8</h3>
                            {isLEKV && <Button className="nit-App__content-h3-nextButton" variant="dark" onClick={() => setIsShowTask3(true)}>Дальше</Button>}
                        </div>
                        <div className="nit-formula">
                            <FormulaInput keyFr="LEKV" task="task2" isResult={isLEKV} sample={LEKV()} result={data[Number(optionValue) - 1].task2.LEKV.toString()} valueInput={valueLEKV} callBack={_setValueTask} callBackSetInput={setValueLEKV} callBackSetIsResult={setIsLEKV} />
                        </div>
                    </>
                )}
                {isShowTask3 && (
                    <>
                        <div className="nit-flex nit-justify-content-center nit-App__content-h3">
                            <h3>3/8</h3>
                            {isWMAX && <Button className="nit-App__content-h3-nextButton" variant="dark" onClick={() => setIsShowTask4(true)}>Дальше</Button>}
                        </div>
                        <div className="nit-formula">
                            <FormulaInput keyFr="WMAX" task="task3" isResult={isWMAX} sample={WMAX()} result={data[Number(optionValue) - 1].task3.WMAX.toString()} valueInput={valueWMAX} callBack={_setValueTask} callBackSetInput={setValueWMAX} callBackSetIsResult={setIsWMAX} />
                        </div>
                    </>
                )}
                {isShowTask4 && (
                    <>
                        <div className="nit-flex nit-justify-content-center nit-App__content-h3">
                            <h3>4/8</h3>
                            {isAZEL && <Button className="nit-App__content-h3-nextButton" variant="dark" onClick={() => setIsShowTask5(true)}>Дальше</Button>}
                        </div>
                        <div className="nit-formula">
                            <FormulaInput keyFr="AZEL" task="task4" isResult={isAZEL} sample={AZEL()} result={data[Number(optionValue) - 1].task4.AZEL.toString()} valueInput={valueAZEL} callBack={_setValueTask} callBackSetInput={setValueAZEL} callBackSetIsResult={setIsAZEL} />
                        </div>
                    </>
                )}
                {isShowTask5 && (
                    <>
                        <div className="nit-flex nit-justify-content-center nit-App__content-h3">
                            <div>
                                <h3>5/8</h3>
                            </div>
                            {isB && <Button className="nit-App__content-h3-nextButton" variant="dark" onClick={() => setIsShowTask6(true)}>Дальше</Button>}
                        </div>
                        <div className="nit-formula">
                            {data[Number(optionValue) - 1].task4.help}
                            <h4>Вычислять значение <b>h</b> следует со значения 3, пока оно не приблизится к нужному результату (3, 4, 5, ...)</h4>
                            <FormulaInput keyFr="H" task="task5" sample={H()} result={''} valueInput={valueH} callBack={_setValueTask} callBackSetInput={setValueH}/>
                            <div className="nit-flex nit-formula-container">
                                a = √
                                <div className="nit-formula-sq">
                                    <div className="nit-formula-sq-line" />
                                    <div className="nit-flex">(h - 1.5)<div className="nit-formula-containerUp"><span className="nit-formula-index">2</span></div> + 7<div className="nit-formula-containerUp"><span className="nit-formula-index">2</span></div></div>
                                </div>
                            </div>
                            <div className="nit-flex nit-formula-container">
                                b = √
                                <div className="nit-formula-sq">
                                    <div className="nit-formula-sq-line" />
                                    <div className="nit-flex">((h - 1.5)<div className="nit-formula-containerUp"><span className="nit-formula-index">2</span></div> + (c - 7)<div className="nit-formula-containerUp"><span className="nit-formula-index">2</span></div>)</div>
                                </div>
                            </div>
                            <FormulaInput keyFr="B" task="task5" isResult={isB} sample={B()} result={data[Number(optionValue) - 1].task5.B.toString()} valueInput={valueB} callBack={_setValueTask} callBackSetInput={setValueB} callBackSetIsResult={setIsB} />
                            <Button variant="primary" type="submit" onClick={_checkTask5}>Проверить вычисления</Button>
                            <div>{_getHelpTask5()}</div>
                        </div>
                    </>
                )}
                {isShowTask6 && (
                    <>
                        <div className="nit-flex nit-justify-content-center nit-App__content-h3">
                            <h3>6/8</h3>
                            {isAECRB && <Button className="nit-App__content-h3-nextButton" variant="dark" onClick={() => setIsShowTask7(true)}>Дальше</Button>}
                        </div>
                        <div className="nit-formula">
                            <FormulaInput keyFr="AECRB" task="task6" isResult={isAECRB} sample={AECRB()} result={data[Number(optionValue) - 1].task6.AECRB.toString()} valueInput={valueAECRB} callBack={_setValueTask} callBackSetInput={setValueAECRB} callBackSetIsResult={setIsAECRB} />
                        </div>
                    </>
                )}
                {isShowTask7 && (
                    <>
                        <div className="nit-flex nit-justify-content-center nit-App__content-h3">
                            <h3>7/8</h3>
                            {isYGL && isAECR && <Button className="nit-App__content-h3-nextButton" variant="dark" onClick={() => setIsShowTask8(true)}>Дальше</Button>}
                        </div>
                        <div className="nit-formula">
                            <FormulaInput keyFr="YGL" task="task7" isResult={isYGL} sample={YGL()} result={data[Number(optionValue) - 1].task7.YGL.toString()} valueInput={valueYGL} callBack={_setValueTask} callBackSetInput={setValueYGL} callBackSetIsResult={setIsYGL} />
                            <FormulaInput keyFr="AECR" task="task7" isResult={isAECR} sample={AECR()} result={data[Number(optionValue) - 1].task7.AECR.toString()} valueInput={valueAECR} callBack={_setValueTask} callBackSetInput={setValueAECR} callBackSetIsResult={setIsAECR} />
                        </div>
                    </>
                )}
                {isShowTask8 && (
                    <>
                        <div className="nit-flex nit-justify-content-center nit-App__content-h3">
                            <h3>8/8</h3>
                            {isL && <Button className="nit-App__content-h3-nextButton" variant="dark">Посмотреть итоги</Button>}
                        </div>
                        <div className="nit-formula">
                            <FormulaInput keyFr="L" task="task8" isResult={isL} sample={L()} result={data[Number(optionValue) - 1].task8.L.toString()} valueInput={valueL} callBack={_setValueTask} callBackSetInput={setValueL} callBackSetIsResult={setIsL} />
                        </div>
                    </>
                )}
            </div>
            <ModalResult lgShow={lgShow}  setLgShow={setLgShow}/>
        </div>
    );
}

export default App;
