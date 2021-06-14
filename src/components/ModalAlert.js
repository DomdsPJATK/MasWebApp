import { StyledButton } from '../styles/GlobalStyles';
import { ModalBody, ModalWrapper, Modal, ModalBar } from '../styles/ModalStyles';

export default function ModalAlert(props) {
    return (
        <Modal visibility={props.visibility}>
            <ModalWrapper>
                <ModalBody>
                    <ModalBar type={props.type}>{props.value}</ModalBar>
                    <StyledButton variant={props.variant | "red"} height="54px" width="100%" onClick={props.action} uppercased type={props.type}>Rozumiem</StyledButton>
                </ModalBody>
            </ModalWrapper>
        </Modal>
    );

}
