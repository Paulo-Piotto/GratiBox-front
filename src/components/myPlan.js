import UserContext from "../contexts/userContext";
import { useContext,  useEffect, useState} from "react";
import { getPlan } from "../services/api.services";
import { useNavigate } from "react-router-dom";
import { Container, SubTitle, Text } from "../styles/sharedStyles";
import styled from "styled-components";
import image from "../assets/Rectangle8.png";
import dayjs from "dayjs";

export default function MyPlan(){
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [plan, setPlan] = useState({});

    useEffect(() => {
        getPlan(user.token)
            .then((resp) => {
                setPlan(resp.data[0]);
            })
            .catch((err) => {
                alert('Houve um erro no sistema');
                navigate('/');
            })
    }, []);

    return(
        <Container>
            <SubTitle>Bom te ver por aqui, {user.name}.</SubTitle>
            <Text>“Agradecer é arte de atrair coisas boas”</Text>
            <Card>
                <img src={image} alt='' />
                <DataContainer>
                    <Data>Plano: <span>{plan.type}</span></Data>
                    <Data>Data da assinatura: <span>{dayjs(plan.sign_date).format('DD/MM/YYYY')}</span></Data>
                    <Data>Próximas entregas:</Data>
                    <Dates>
                        <Data><span>dd/mm/aaaa</span></Data>
                        <Data><span>dd/mm/aaaa</span></Data>
                        <Data><span>dd/mm/aaaa</span></Data>
                    </Dates>
                </DataContainer>
                <Products>
                    {plan.products}
                </Products>
            </Card>
        </Container>
    );
}

const Card = styled.div`
    width: 90%;
    height: 55vh;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    img{
        width: 90%;
        margin-bottom: 20px;
    }
`

const DataContainer = styled.div`
    width: 90%;
`

const Data = styled.p`
    color: #4D65A8;
    font-size: 18px;
    margin-bottom: 5px;
    font-weight: bold;

    span{
        color: #E63C80;
    }
`

const Dates = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 30px;
`

const Products = styled.p`
    position: absolute;
    bottom: 10px;
    left: 15px;
    color: #E63C80;
    font-weight: 300;
    font-size: 15px;
`