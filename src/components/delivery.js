import UserContext from "../contexts/userContext";
import { useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import { Container, SubTitle, Text, MainButton } from "../styles/sharedStyles";
import styled from "styled-components";
import image from "../assets/Rectangle8.png";
import { postDelivery, postPlan } from "../services/api.services";

export default function Delivery({newPlan}){
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [deliveryData, setDeliveryData] = useState({
        userId: user.id,
        fullName: '',
        adress: '',
        cep: '',
        city: '',
        state: '',
    })

    function submitPlan(event){
        event.preventDefault();
       
        if(deliveryData.cep.length === 8 && !isNaN(deliveryData.cep)){
            postDelivery(deliveryData, user.token)
                .then((resp) => {
                    postPlan(newPlan, user.token)
                        .then((resp) => {
                            alert('Plano cadastrado com sucesso!');
                            navigate('/my-plan');
                        })
                        .catch((err) => {
                            alert('Houve um erro no cadastro do seu plano, refaça o procedimento');
                            navigate('/my-plan');
                        })
                })
                .catch((err) => {
                    alert('Houve um erro no cadastro do seu plano, refaça o procedimento');
                    navigate('/my-plan');
                })
        }else{
            alert('Preencha os dados corretamente')
        }
    }

    return(
        <Container>
            <SubTitle>Bom te ver por aqui, {user.name}.</SubTitle>
            <Text>“Agradecer é arte de atrair coisas boas”</Text>
            <Card>
                <img src={image} alt='' />
                <Form onSubmit={submitPlan}>
                    <Input type='text' placeholder='Nome completo' value={deliveryData.fullName} onChange={(e) => setDeliveryData({...deliveryData, fullName: e.target.value})} required />
                    <Input type='text' placeholder='Endereço de entrega' value={deliveryData.adress} onChange={(e) => setDeliveryData({...deliveryData, adress: e.target.value})} required />
                    <Input type='text' placeholder='CEP' value={deliveryData.cep} onChange={(e) => setDeliveryData({...deliveryData, cep: e.target.value})} required/>
                    <InputsContainer>
                        <CityInput type='text' placeholder='Cidade' value={deliveryData.city} onChange={(e) => setDeliveryData({...deliveryData, city: e.target.value})} required/>
                        <StateInput value={deliveryData.state} onChange={(e) => setDeliveryData({...deliveryData, state: e.target.value})} required>
                            <option value=''>Estado</option>
                            <option value='AC'>AC</option>
                            <option value='AL'>AL</option>
                            <option value='AP'>AP</option>
                            <option value='AM'>AM</option>
                            <option value='BA'>BA</option>
                            <option value='CE'>CE</option>
                            <option value='ES'>ES</option>
                            <option value='GO'>GO</option>
                            <option value='MA'>MA</option>
                            <option value='MT'>MT</option>
                            <option value='MS'>MS</option>
                            <option value='MG'>MG</option>
                            <option value='PA'>PA</option>
                            <option value='PB'>PB</option>
                            <option value='PR'>PR</option>
                            <option value='PE'>PE</option>
                            <option value='PI'>PI</option>
                            <option value='RJ'>RJ</option>
                            <option value='RN'>RN</option>
                            <option value='RS'>RS</option>
                            <option value='RO'>RO</option>
                            <option value='RR'>RR</option>
                            <option value='SC'>SC</option>
                            <option value='SP'>SP</option>
                            <option value='SE'>SE</option>
                            <option value='TO'>TO</option>
                            <option value='DF'>DF</option>
                        </StateInput>
                    </InputsContainer>
                    <Button type='submit'>Finalizar</Button>
                </Form>
            </Card>
            
        </Container>
    );
}

const Card = styled.div`
    width: 90%;
    height: 63vh;
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

const Form = styled.form`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Input = styled.input`
    width: 100%;
    height: 45px;
    background-color: #E0D1ED9E;
    border-radius: 5px;
    color: #4D65A8;
    padding: 10px;
    font-size: 18px;
    outline: none;
    border: none;
    margin-bottom: 7px;

    &::placeholder{
        font-weight: bold;
        color: #4D65A8;
    }
`

const InputsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const CityInput = styled.input`
    width: 60%;
    height: 45px;
    background-color: #E0D1ED9E;
    border-radius: 5px;
    color: #4D65A8;
    padding: 10px;
    font-size: 18px;
    outline: none;
    border: none;
    margin-bottom: 7px;

    &::placeholder{
        font-weight: bold;
        color: #4D65A8;
    }
`

const StateInput = styled.select`
    width: 35%;
    height: 45px;
    background-color: #E0D1ED9E;
    border-radius: 5px;
    color: #4D65A8;
    padding: 10px;
    font-size: 18px;
    outline: none;
    border: none;
    margin-bottom: 7px;
    font-weight: bold; 
`

const Button = styled(MainButton)`
    margin-top: 45px;
`