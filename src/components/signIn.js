import { Container, MainButton, SubButton, Form, Title, Loading } from "../styles/sharedStyles";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../contexts/userContext";
import { useContext, useState } from "react";
import { signInUser } from "../services/api.services";
import loadingGif from '../assets/loading-buffering.gif';

export default function SignIn(){
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    const [logUser, setLogUser] = useState({
        email: '',
        password: '',
    });
    const [loading, setLoading] = useState(false);

    function logIn(event){
        event.preventDefault();
        setLoading(true);

        signInUser(logUser)
            .then((resp) => {
                setUser(resp.data);
                setLoading(false);
                navigate('/my-plan');
            })
            .catch((err) => {
                alert('Usuário ou senha incorretos!');
                setLoading(false);
            })
    }

    return(
        <Container>
            <Title>Bem-vindo ao <span>GratiBox</span></Title>
            <Forms onSubmit={ logIn }>
                <input type='email' placeholder='Email' value={logUser.email} onChange={(e) => setLogUser({...logUser, email: e.target.value})} required  />
                <input type='password' placeholder='Senha' value={logUser.password} onChange={(e) => setLogUser({...logUser, password: e.target.value})} required  />
                <Button disabled={loading} type='submit'>Login</Button>
                <SButton disabled={loading} onClick={() => navigate('/sign-up')}>Ainda não sou grato</SButton>
                {loading ? <Loading src={loadingGif} alt='' /> : ''}
            </Forms>
        </Container>
    );
}

const Forms = styled(Form)`
    position: relative;
    height: 75vh;
`

const Button = styled(MainButton)`
    position: absolute;
    bottom: 50px;
`

const SButton = styled(SubButton)`
    position: absolute;
    bottom: 30px;
`