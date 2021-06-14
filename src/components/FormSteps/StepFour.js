import { Title, StyledButton } from "../../styles/GlobalStyles";
import { InputLabel, InputWrapper, StepWrapper, Input } from "../../styles/StepsStyles";
import React, { useState } from 'react';
import Modal from "../ModalAlert";
import { TextTemplate } from "./TextTemplate";
import axios from 'axios';
import ModalAlertAssigning from '../ModalAlertAssigning';
import { useHistory } from 'react-router-dom';


//Formularz druzyny przeciwnej

export function StepFour(props) {
    const [modalVisibility, setModalVisibility] = useState(false);
    const [modalAssigningVisibility, setModalAssigningVisibility] = useState(false);
    const [modalCorrectVisibility, setModalCorrectVisibility] = useState(false);
    const [matchId, setMatchId] = useState(0);

    let history = useHistory();

    //Obsluga przycisku + walidacja gdy chcemy przejsc dalej
    const handleClick = () => {
        if (props.state.opponentName !== undefined) {
            axios.all([
                axios.post(`https://localhost:5001/matches/create`, {
                    fieldId: props.state.fieldId,
                    teamId: props.state.teamId,
                    dateSince: props.state.date.dateSince,
                    dateUntil: props.state.date.dateUntil,
                    enemyName: props.state.opponentName,
                    status: "CREATED"
                })
            ]).then(axios.spread((data) => {
                setMatchId(data.data);
                setModalAssigningVisibility(!modalAssigningVisibility);
            }))
        }
        else
            modalToggleForIncorrect();
    };

    //Pokazanie/Ukrycie modala + funkcjonalnosci
    const modalToggleForIncorrect = () => {
        setModalVisibility(!modalVisibility);
    };

    const backToHome = () => {
        history.push("/");
    };

    const modalToggleWithoutAddingReferee = () => {
        setModalAssigningVisibility(!modalAssigningVisibility);
        setModalCorrectVisibility(!modalCorrectVisibility);
    };

    const modalToggleAndAddReferee = () => {
        console.log(matchId);
        axios.all([
            axios.get(`https://localhost:5001/matches/addReferee/${matchId}/1`),

        ]).then(axios.spread((data) => {
            setModalAssigningVisibility(!modalAssigningVisibility);
            setModalCorrectVisibility(!modalCorrectVisibility);
        }));
    }

    return (
        <>
            <Title>Wprowadź nazwę drużyny przeciwnej</Title>
            <StepWrapper>
                <InputWrapper>
                    <InputLabel>Nazwa druzyny przeciwnej:</InputLabel>
                    <Input type="text" name="opponentName" value={props.getState("opponentName", "")} onChange={props.handleChange}></Input>
                </InputWrapper>
            </StepWrapper>
            <StyledButton variant="danger" height="54px" width="100%" onClick={() => handleClick()} uppercased>Potwierdź</StyledButton>

            <ModalAlertAssigning visibility={modalAssigningVisibility} actionOnNo={modalToggleWithoutAddingReferee} actionOnYes={modalToggleAndAddReferee} value={TextTemplate.assigning}></ModalAlertAssigning>
            <Modal visibility={modalCorrectVisibility} action={backToHome} type="green" value={TextTemplate.correct}></Modal>
            <Modal visibility={modalVisibility} action={modalToggleForIncorrect} type="red" value={TextTemplate.incorrect}></Modal>
        </>
    );
}
