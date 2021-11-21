import UserContext from "../contexts/userContext";
import { useContext} from "react";
import { useNavigate } from "react-router-dom";
import { Container, SubTitle, Text, MainButton } from "../styles/sharedStyles";
import styled from "styled-components";
import image1 from "../assets/istockphoto.png";
import image2 from "../assets/Rectangle9.png";

export default function ChoosePlan(){
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    return(
        <FluidContainer>
            <SubTitle>Bom te ver por aqui, {user.name}.</SubTitle>
            <Txt>Você ainda não assinou um plano, que tal começar agora?</Txt>
            <Card>
                <img src={image1} alt=''/>
                <Description>
                Você recebe um box por semana. 
                Ideal para quem quer exercer a gratidão todos os dias.
                </Description>
                <MainButton onClick={() => navigate('/new-plan')}>Assinar</MainButton>
            </Card>
            <Card>
                <img src={image2} alt=''/>
                <Description>
                Você recebe um box por mês.
                Ideal para quem está começando agora.
                </Description>
                <MainButton onClick={() => navigate('/new-plan')}>Assinar</MainButton>
            </Card>
        </FluidContainer>
    );
}

const Card = styled.div`
    width: 90%;
    height: 65vh;
    background-color: #E5CDB3;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;

    img{
        width: 90%;
        margin-bottom: 20px;
        max-height: 60%;
    }
`

const Txt = styled(Text)`
    margin-left: 15px;
` 

const Description = styled.p`
    font-size: 18px;
    font-weight: bold;
    color: #4D65A8;
    width: 90%;
    margin-bottom: 36px;
`

const FluidContainer = styled(Container)`
    height: auto;
`