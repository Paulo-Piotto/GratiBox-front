import styled from "styled-components";
import homeImage from '../assets/meditation_woman.png'
import { Container, Title, MainButton, SubButton } from "../styles/sharedStyles";
import { useNavigate } from "react-router-dom";

export default function Home(){
    const navigate = useNavigate();

    return(
        <Container>
            <TextContent>
                <Title>Bem vindo ao <span>GratiBox</span></Title>
                <Text>Receba em casa um box com chás, produtos organicos, incensos e muito mais...</Text>
            </TextContent>
            <ImageContent>
                <img src={homeImage} alt=''/>
                <Buttons>
                    <MainButton onClick={() => navigate('/sign-up')} >Quero começar</MainButton>
                    <SubButton onClick={() => navigate('/sign-in')} >Já sou grato</SubButton>
                </Buttons>
            </ImageContent>
        </Container>
    );
}

const Text = styled.p`
    font-size: 18px;
    text-align: center;
    margin-bottom: 30px;
    font-weight: 300;
`

const TextContent = styled.div`
    height: 30%;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ImageContent = styled.div`
    width: 100%;
    height: 70%;
    background-color: #4D65A8;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    img{
        width: 100%;
        max-width: 500px;
        height: 70%;
    }
`

const Buttons = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    bottom: 40px;
`