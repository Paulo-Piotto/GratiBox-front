import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.h2`
    text-align: center;
    font-size: 28px;
    margin: 50px 0 45px 0;

    span{
        font-weight: bold;
    }
`

const MainButton = styled.button`
    border: none;
    outline: none;
    border-radius: 10px;
    padding: 11px;
    width: 50%;
    height: 45px;
    background-color: #8C97EA;
    font-weight: 700;
    font-size: 18px;
    color: white;
    margin: 20px 0 15px 0;
`

const SubButton = styled.p`
    font-size: 18px;
    font-weight: 700;
`

const Form = styled.form`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;

    input{
        border: none;
        outline: none;
        background-color: white;
        width: 100%;
        height: 60px;
        border-radius: 10px;
        padding: 15px;
        font-size: 20px;
        margin-bottom: 10px;
    }
`

const Loading = styled.img`
    width: 10%;
    margin-top: 15px;
`

export {
    Container,
    Title,
    MainButton,
    SubButton,
    Form,
    Loading,
}