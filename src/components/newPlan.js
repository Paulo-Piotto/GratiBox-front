
import UserContext from "../contexts/userContext";
import { useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import { Container, SubTitle, Text, MainButton } from "../styles/sharedStyles";
import styled from "styled-components";
import image from "../assets/Rectangle8.png";
import dayjs from "dayjs";
import { IoArrowDown } from "react-icons/io5";

export default function NewPlan({setNewPlan}){
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [openMenu, setOpenMenu] = useState('tipo');
    const [selectedPlan, setSelectedPlan] = useState('Semanal');
    const [selectedDay, setSelectedDay] = useState('');
    const [selectedProducts, setSelectedProducts] = useState({
        chas: false,
        incensos: false,
        organicos: false,
    });

    function selectProduct(product){
        switch (product){
            case 'chas': 
            if(selectedProducts.chas){
                setSelectedProducts({...selectedProducts, chas: false});
            }else{
                setSelectedProducts({...selectedProducts, chas: true});
            }
            break;
            case 'incensos': 
            if(selectedProducts.incensos){
                setSelectedProducts({...selectedProducts, incensos: false});
            }else{
                setSelectedProducts({...selectedProducts, incensos: true});
            }
            break;
            case 'organicos': 
            if(selectedProducts.organicos){
                setSelectedProducts({...selectedProducts, organicos: false});
            }else{
                setSelectedProducts({...selectedProducts, organicos: true});
            }
            break;
            default: setSelectedProducts({...selectedProducts});
        }
    }

    function savePlan(){
        const products = [];
        if(selectedProducts.chas){
            products.push('Chás');
        }
        if(selectedProducts.incensos){
            products.push('Incensos');
        }
        if(selectedProducts.organicos){
            products.push('Produtos orgânicos');
        }

        const stringProducts = products.join(', ');

        if(stringProducts.length > 0){
            if(selectedPlan === 'Semanal' && (selectedDay === 'Segunda' || selectedDay === 'Quarta' || selectedDay === 'Sexta')){
                setNewPlan({
                    userId: user.id,
                    type: selectedPlan,
                    deliveryDate: selectedDay,
                    products: stringProducts,
                    signDate: dayjs().format('MMM D YYYY'),
                });
        
                navigate('/delivery');
            }else if(selectedPlan === 'Mensal' && (selectedDay === '01' || selectedDay === '10' || selectedDay === '20')){
                setNewPlan({
                    userId: user.id,
                    type: selectedPlan,
                    deliveryDate: selectedDay,
                    products: stringProducts,
                    signDate: dayjs().format('MMM D YYYY'),
                });
        
                navigate('/delivery');
            }else{
                alert('Selecione Corretamente os dados para o plano');
            }
        }else{
            alert('Selecione Corretamente os dados para o plano');
        }
    }

    return(
        <Container>
            <SubTitle>Bom te ver por aqui, {user.name}.</SubTitle>
            <Text>“Agradecer é arte de atrair coisas boas”</Text>
            <Card>
                <img src={image} alt='' />
                <ContainerMenu>
                {openMenu === 'tipo' ? (
                        <MenuOpen>
                            <MenuTitle>Plano</MenuTitle>
                            <ItemsContainer>
                                <Item selected={selectedPlan === 'Semanal' ? true : false} onClick={() => setSelectedPlan('Semanal')}>Semanal</Item>
                                <Item selected={selectedPlan === 'Mensal' ? true : false} onClick={() => setSelectedPlan('Mensal')}>Mensal</Item>
                            </ItemsContainer>
                        </MenuOpen>
                    ) : (
                        <Menu onClick={() => setOpenMenu('tipo')}>
                            <p>Plano</p>
                            <IoArrowDown />
                        </Menu>
                    )}
                    {openMenu === 'data' ? (
                        <MenuOpen>
                            <MenuTitle>Entrega</MenuTitle>
                            <ItemsContainer>
                                {selectedPlan === 'Semanal' ? (
                                    <>
                                    <Item selected={selectedDay === 'Segunda' ? true : false} onClick={() => setSelectedDay('Segunda')}>Segunda-feira</Item>
                                    <Item selected={selectedDay === 'Quarta' ? true : false} onClick={() => setSelectedDay('Quarta')}>Quarta-feira</Item>
                                    <Item selected={selectedDay === 'Sexta' ? true : false} onClick={() => setSelectedDay('Sexta')}>Sexta-feira</Item>
                                    </>
                                ) : (
                                    <>
                                    <Item selected={selectedDay === '01' ? true : false} onClick={() => setSelectedDay('01')}>Dia 1</Item>
                                    <Item selected={selectedDay === '10' ? true : false} onClick={() => setSelectedDay('10')}>Dia 10</Item>
                                    <Item selected={selectedDay === '20' ? true : false} onClick={() => setSelectedDay('20')}>Dia 20</Item>
                                    </>
                                )}
                            </ItemsContainer>
                        </MenuOpen>
                    ) : (
                        <Menu onClick={() => setOpenMenu('data')}>
                            <p>Entrega</p>
                            <IoArrowDown />
                        </Menu>
                    )}
                    {openMenu === 'produtos' ? (
                        <MenuOpen>
                            <MenuTitle>Quero receber</MenuTitle>
                            <ItemsContainer>
                                <Item onClick={() => selectProduct('chas')} selected={selectedProducts.chas ? true : false} >Chás</Item>
                                <Item onClick={() => selectProduct('incensos')} selected={selectedProducts.incensos ? true : false} >Incensos</Item>
                                <Item onClick={() => selectProduct('organicos')} selected={selectedProducts.organicos ? true : false} >Produtos Orgânicos</Item>
                            </ItemsContainer>
                        </MenuOpen>
                    ) : (
                        <Menu onClick={() => setOpenMenu('produtos')}>
                            <p>Quero receber</p>
                            <IoArrowDown />
                        </Menu>
                    )}
                </ContainerMenu>
            </Card>
            <MainButton onClick={savePlan}>Próximo</MainButton>
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

const ContainerMenu = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Menu = styled.div`
    width: 85%;
    height: 46px;
    border-radius: 5px;
    background-color: #E0D1ED9E;
    margin-bottom: 7px;
    color: #4D65A8;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;

    p{
        font-weight: bold;
        font-size: 18px;
    }
`

const MenuOpen = styled.div`
    width: 85%;
    height: 115px;
    border-radius: 5px;
    background-color: #E0D1ED9E;
    margin-bottom: 7px;
    color: #4D65A8;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    align-items: flex-end;
    justify-content: center;
`
const MenuTitle = styled.h4`
    font-weight: bold;
    font-size: 18px;
    position: absolute;
    left: 15px;
    top: 10px;
`

const ItemsContainer = styled.div`
    width: 90%;
    height: 65%;
    display: flex;
    flex-wrap: wrap;
`

const Item = styled.div`
        font-weight: 400;
        font-size: 15px;
        margin-right: 60px;
        color: ${({ selected }) => selected ? 'green' : '#4D65A8' };
`