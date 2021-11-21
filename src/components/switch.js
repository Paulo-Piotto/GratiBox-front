import UserContext from "../contexts/userContext";
import { useContext,  useEffect, useState} from "react";
import { getPlan } from "../services/api.services";
import MyPlan from "./myPlan";
import ChoosePlan from "./choose";
import { useNavigate } from "react-router-dom";

export default function Switch(){
    const [havePlan, setHavePlan] = useState(false);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        getPlan(user.token)
            .then((resp) => {
                if(!resp.data[0]){
                    setHavePlan(false);
                }else{
                    setHavePlan(true);
                }
            })
            .catch((err) => {
                alert('Houve um erro no sistema');
                navigate('/');
            })
    }, []);

    return(
        <>
        {havePlan ? <MyPlan /> : <ChoosePlan />}
        </>
    );
}