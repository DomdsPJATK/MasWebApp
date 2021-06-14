import { Title, StyledButton } from "../../styles/GlobalStyles";
import { StepWrapper } from "../../styles/StepsStyles";
import { List, Item } from "../../styles/StepsStyles";
import React, { useState, useEffect } from 'react';
import Modal from "../ModalAlert";
import { TextTemplate } from "./TextTemplate";
import axios from 'axios';


//Formularz druzyny

export function StepOne(props) {
    const [modalVisibility, setModalVisibility] = useState(false);
    const [data, setData] = useState([]);

    //Pobieranie danych z bazy przy ladowaniu
    useEffect(() => {
        axios.all([
            axios.get(`https://localhost:5001/teams`),

        ]).then(axios.spread((data) => {
            setData(data.data);
        }));
        }
    , []);
    
    //Obsluga przycisku + walidacja gdy chcemy przejsc dalej
    const handleClick = () => {
        if (props.state.teamId !== undefined) {
            props.next();
        }
        else
            modalToggle();
    };

    //Ustawienie state dla props.state.teamId
    const handleChange = (id) => {
        props.setState("teamId", id);
    };

    //Pokazanie/Ukrycie modala
    const modalToggle = () => {
        setModalVisibility(!modalVisibility);
    };

    const renderItem = (res, index) => {
        return (
            <Item key={index} action href={`#${index}`} onClick={() => handleChange(res.teamId)}>
                {res.name}
            </Item>
        );
    };

    return (
        <>
            <Title>Wybierz drużynę dla której chcesz przypisać mecz</Title>
            <StepWrapper>
                <List>
                    {data.map((res, index) => renderItem(res, index))}
                </List>
            </StepWrapper>
            <StyledButton variant="danger" height="54px" width="100%" onClick={() => handleClick()} uppercased>Potwierdź</StyledButton>

            <Modal visibility={modalVisibility} action={modalToggle} type="red" value={TextTemplate.incorrect}></Modal>
        </>
    );
}
