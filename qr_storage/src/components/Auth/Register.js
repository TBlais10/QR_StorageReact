import React, {useState} from "react";
import axios from axios;
import {useNavigate} from 'react-router-dom'
import NewUserForm from "./NewUserForm";
import Container from "../../common/Container";
import Splash from "../../common/Splash";
import RegSplash from "../../assets/login_qrstorage.jpg"
import { apiHostUrl } from "../../config";
import Login from "./Login";

const Register = () => {
    const [newUser, setNewUser] = useState({
        email:'',
        password:'',
        fName:'',
        lName:'',
        age:'',
        gender:'',
        town:'',
        state:'',
    })

    const navigate = useNavigate();

    const updateForm = (field, value) => {
        setNewUser({
            ...newUser,
            [field]: value
        })
    }

    const createUser = async(data) => {
        console.log(data)
        try{
            const rest = await axios.post(`${apiHostUrl}/api/auth/signup`, data);
            console.log(res.data)
            login(data);
        } catch (err) {
            console.error(err.message)
        }
    }

    const login = async (data) =>{
        try{
            const res = await axios.post(`${apiHostUrl}/api/auth/signin`, data);
            console.log(res.data)
            createDeveloper(data, res.data.token);
        } catch(err){
            console.error(err.response.data)
        }
    }

    const createDeveloper = async (data, token) => {
        console.log(data)
        try{
            const res = await axios.post(`${apiHostUrl}/api/developers`, data, 
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
            console.log(res.data)
            navigate('/login');
        } catch(err){
            console.error(err.response.data)
        }
    }

    const onSubmit = () => {
        const data = newUser;
        data.name = `${data.fName} ${data.lName}`
        data.username = data.email

        createUser(data)
    }

    return(
        <Container>
            <Splash image={RegSplash} style={{
                height: '20vh',
                color: "#f1f1f1",
            }}>
                <h1>Register</h1>
            </Splash>
            <NewUserForm
            newUser={newUser}
            onChange={updateForm}
            onSubmit={onSubmit}
            />
        </Container>
    )
}

export default Register;