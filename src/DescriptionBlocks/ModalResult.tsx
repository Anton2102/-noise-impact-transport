import { Modal } from 'react-bootstrap';
import { ficha } from '../help';
import './style/modalResult.css';

interface IModalResult {
    lgShow: boolean;
    setLgShow: Function;
}

const ModalResult = ({lgShow, setLgShow} :IModalResult) => {

    const _getFicha = (): string => {
        const value = ficha()[Math.floor(Math.random() * 10)];
        const text = value.text;
        const author = value.author;
        return ` ${text} ${author && '@' + author}`;
    }

    return (
        <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)} aria-labelledby="example-modal-sizes-title-sm">
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                    Вы успешно справились. Не забудьте переписать результаты!
                </Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <div className="nit-ModalResult-ficha">
                    Не зыбывайте думать о простых вещах:
                    {_getFicha()}
                </div>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalResult;