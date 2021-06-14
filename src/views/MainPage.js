import React, { useEffect, useState } from 'react';
import { ContentWrapper, Title } from '../styles/GlobalStyles';
import { ListBarLink, ListBarElement, ListBarWrapper, ListBarText, ListBarButton } from '../styles/ListBarStyles';
import { useHistory } from 'react-router-dom';
import Modal from "../components/ModalAlert";
import axios from 'axios';

export default function MainPage() {
    let history = useHistory();
    const [modalVisibility, setModalVisibility] = useState(false);
    const [data, setData] = useState({});

    //Pobieranie boisk i teamow do walidacji
    useEffect(() => {
        axios.all([
            axios.get(`https://localhost:5001/fields`),
            axios.get(`https://localhost:5001/teams`)

        ]).then(axios.spread((data1, data2) => {
            setData({
                fields: data1,
                teams: data2
            })
        }));
        }
    );
    
    //Obsluga przycisku dodania
    const handleClick = () => {
        if (data.fields.data.length > 0 && data.teams.data.length > 0) history.push("/match-form");
        else modalToggle();
    }

    //Pokazanie/Ukrycie modala
    const modalToggle = () => {
        setModalVisibility(!modalVisibility);
    };

    return (
        <ContentWrapper>
            <Modal $visibility={modalVisibility} action={modalToggle} type="red" value="W systemie nie ma żadnej drużyny lub boiska"></Modal>
            <Title>Witaj w systemie naszego klubu!</Title>
            <ListBarWrapper>
                <ListBarElement type="white">
                    <ListBarText>Wyświetl wszystkie boiska w klubie</ListBarText>
                    <ListBarLink>Wyświetl</ListBarLink>
                </ListBarElement>
                <ListBarElement type="white">
                    <ListBarText>Wyświetl wszystkie drużyny w klubie</ListBarText>
                    <ListBarLink>Wyświetl</ListBarLink>
                </ListBarElement>
                <ListBarElement type="white">
                    <ListBarText>Wyswietl najbliższe mecze</ListBarText>
                    <ListBarLink >Wyświetl</ListBarLink>
                </ListBarElement>
                <ListBarElement type="red" padding="10px">
                    <ListBarText>Dodaj nowy mecz</ListBarText>
                    <ListBarLink type="white" onClick={() => handleClick()}>Dodaj</ListBarLink>
                </ListBarElement>
                <ListBarButton type="white" variant="danger">Rozwin</ListBarButton>
            </ListBarWrapper>
        </ContentWrapper>
    );
}