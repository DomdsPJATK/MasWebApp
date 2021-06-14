import { Title, StyledButton } from "../../styles/GlobalStyles";
import { InputLabel, InputWrapper, StepWrapper, Input } from "../../styles/StepsStyles";
import { List, Item } from "../../styles/StepsStyles";
import React, { useState, useEffect } from 'react';
import Modal from "../ModalAlert";
import { TextTemplate } from "./TextTemplate";
import axios from 'axios';

//Formularz terminu

export function StepThree(props) {
    const [modalVisibility, setModalVisibility] = useState(false);
    const [data, setData] = useState([]);
    const [chooseDate, setChooseDate] = useState("");

    //Pobieranie danych z bazy przy ladowaniu i przy zmianie chooseDate
    useEffect(() => {
        if(chooseDate !== ""){
        axios.all([
            axios.post(`https://localhost:5001/fields/terms`, {
                date: chooseDate,
                fieldId: props.state.fieldId
            })
        ]).then(axios.spread((data) => {
            setData(data.data);
        }))
    }
    },[chooseDate, props.state.fieldId]);


    //Pobieranie wolnych terminow z bazy
    const getTerms = event => {
        props.setState("dateDay", event.target.value);
        setChooseDate(event.target.value);
    }

    //Obsluga przycisku + walidacja gdy chcemy przejsc dalej
    const handleClick = () => {
        if (props.state.dateDay !== undefined && props.state.date !== undefined) {
            props.next();
        }
        else
            modalToggle();
    };

    //Pokazanie/Ukrycie modala
    const modalToggle = () => {
        setModalVisibility(!modalVisibility);
    };

    //Ustawienie state dla props.state.date
    const handleChange = (res) => {
        props.setState("date", {
            dateSince: res.dateSince,
            dateUntil: res.dateUntil
        });
    };

    const renderItem = (res, index) => {
        var firstDate = new Date(res.dateSince);
        var secondDate = new Date(res.dateUntil);

        return (
            <Item key={index} action href={`#${index}`} onClick={() => handleChange(res)}>
                {getFormatedTerm(firstDate, secondDate)}
            </Item>
        );
    };

    const getFormatedTerm = (firstDate, secondDate) => {
        return ([(firstDate.getHours() > 9 ? '' : '0') + firstDate.getHours(), (firstDate.getMinutes() > 9 ? '' : '0') + firstDate.getMinutes()].join(':')
        + " - " + [(secondDate.getHours() > 9 ? '' : '0') + secondDate.getHours(), (secondDate.getMinutes() > 9 ? '' : '0') + secondDate.getMinutes()].join(':'));
    }

    return (
        <>
            <Title>Wybierz termin rozegrania meczu</Title>
            <StepWrapper>
                <InputWrapper>
                    <InputLabel>Wybiedz dzień:</InputLabel>
                    <Input type="date" name="dateDay" value={props.getState("dateDay", "")} onChange={event => getTerms(event)}></Input>
                </InputWrapper>
                <List>
                    {data.map((res, index) => renderItem(res, index))}
                </List>
            </StepWrapper>
            <StyledButton variant="danger" height="54px" width="100%" onClick={() => handleClick()} uppercased>Potwierdź</StyledButton>


            <Modal visibility={modalVisibility} action={modalToggle} type="red" value={TextTemplate.incorrect}></Modal>
        </>
    );
}
