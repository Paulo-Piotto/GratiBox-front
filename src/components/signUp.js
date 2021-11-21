import { Container, MainButton, SubButton, Form, Title, Loading } from "../styles/sharedStyles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { signUpUser } from '../services/api.services';
import loadingGif from '../assets/loading-buffering.gif';

export default function SignUp(){
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    function createUser(event){
        event.preventDefault();

        setLoading(true);

        if(password === confirmPassword){
            signUpUser({name, email, password})
            .then(() => {
                setLoading(false);
                alert('Usuário cadastrado com sucesso!')
                navigate('/sign-in')
            })
            .catch(() => {
                setLoading(false);
                alert('dados inválidos');
            })
        }else{
            alert('As senhas precisam ser iguais!')
            setLoading(false)
        }
        
    }

    return(
        <Container>
            <Title>Bem-vindo ao <span>GratiBox</span></Title>
            <Form onSubmit={createUser}>
                <input type='text' placeholder='Nome' value={name} onChange={(e) => setName(e.target.value)} required />
                <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required  />
                <input type='password' placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)} required  />
                <input type='password' placeholder='Confirmar senha' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required  />
                <MainButton disabled={loading} type='submit'>Cadastrar</MainButton>
                <SubButton disabled={loading} onClick={() => navigate('/sign-in')}>Já sou grato</SubButton>
                {loading ? <Loading src={loadingGif} alt='' /> : ''}
            </Form>
        </Container>
    );
}