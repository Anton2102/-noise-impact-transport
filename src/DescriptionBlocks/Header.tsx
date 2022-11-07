import './style/header.css'
import {Button, Form} from 'react-bootstrap';

interface IHeader {
    optionValue: string;
    callBack: Function;
    buttonCallBack: Function;
    isOption: boolean;
}

const Header = ({optionValue, callBack, buttonCallBack, isOption}: IHeader) => {
    return (
        <div className="nit-Header">
            <h1>РАСЧЕТ И ОЦЕНКА ШУМОВОГО ВОЗДЕЙСТВИЯ ТРАНСПОРТА</h1>
            <b>Цель работы: </b>освоить путем выполнения конкретного расчета методику определения шумового
            загрязнения траспортом и оценить эффективность шумозащитных мероприятий.

            <h2>Задание</h2>
            <div className="nit-Header__task-container">
                <li>Рассчитать эквивалентный уровень звука в расчётной точке придорожной территории.</li>
                <li>Сравнить полученные результаты с допустимыми уровнями звука.</li>
                <li>При необходимости выбрать шумозащитные мероприятия, позволяющие снизить уровень шума, применив экраны и/или
                    полосы зеленых насаждений.</li>
                <li>Рассчитать параметры экрана и размеры зеленых насаждений, которые необходимо разместить между источником шума и защищенными от шума объектами.</li>
            </div>
            {!isOption && (
                <div className="nit-App__content-option">
                    <Form.Control value={optionValue} placeholder="Введите вариант" onChange={(event) => callBack(event)}/>
                    <Button variant="primary" type="submit" onClick={(event) => buttonCallBack(event)}>Начать</Button>
                </div>
            )}
        </div>
    );
}

export default Header;
