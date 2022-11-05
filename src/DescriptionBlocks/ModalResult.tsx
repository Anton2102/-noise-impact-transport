import { Modal } from 'react-bootstrap';

interface IModalResult {
    lgShow: boolean;
    setLgShow: Function;
}

const ModalResult = ({lgShow, setLgShow} :IModalResult) => {
    return (
        <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)} aria-labelledby="example-modal-sizes-title-sm">
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                    Small Modal
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>...</Modal.Body>
            <Modal.Footer>123</Modal.Footer>
        </Modal>
    );
}

export default ModalResult;