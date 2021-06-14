import { StyledButton } from '../styles/GlobalStyles';
import { ModalBody, ModalWrapper, Modal, ModalBar, ButtonsWrapper } from '../styles/ModalStyles';

export default function ModalAlertAssigning(props) {
    return (
        <Modal visibility={props.visibility}>
            <ModalWrapper>
                <ModalBody>
                    <ModalBar type="green">{props.value}</ModalBar>
                    <ButtonsWrapper>
                    <StyledButton variant="success" height="54px" width="49%" onClick={props.actionOnYes} uppercased type="green">Tak</StyledButton>
                    <StyledButton variant="success" height="54px" width="49%" onClick={props.actionOnNo} uppercased type="green">Nie</StyledButton>
                    </ButtonsWrapper>
                </ModalBody>
            </ModalWrapper>
        </Modal>
    );

}
