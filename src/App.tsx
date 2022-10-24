import React from 'react';
import Header from './DescriptionBlocks/Header'
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/app.css';

const App = () => {
    const _choseOption = () => {
        // 123
    }

    return (
        <div className="nit">
            <Header/>
            <div className="nit-App__content">
                <div className="nit-App__content-option">
                    <Form.Control type="password" placeholder="Введите вариант" />
                    <Button className="nit-App__content-option-button" variant="primary" type="submit" onClick={_choseOption}>Начать</Button>
                </div>
                <div>
                    <h3>1)</h3>
                    <div>L<span>ЭКВ</span> + Δ</div>
                </div>
            </div>
        </div>
    );
}

export default App;
