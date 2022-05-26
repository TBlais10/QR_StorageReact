import React from "react";
import Button from "../..common/Button";
import Container from "../../common/Container";
import Form from "../../common/Form";
import InlineInputContainer from "../../common/InlineInputContainer";
import Input from "../../common/Input";

const LoginForm = (props) => {
    const {newLogin} = props;

    const handlechange = (e) =>{
        props.onChange(e.target.id, e.target.value);
    }

    return(
        <Container>
            <Form onSubmit={props.onSubmit} style={{marginTop: '1em'}}>
                    <InlineInputContainer>
                        <Input
                            name="username"
                            id="username"
                            value={newLogin.username}
                            placeholder={"Email"}
                            onChange={handleChange}
                            required
                            type="email"
                            />
                    </InlineInputContainer>
                    <InlineInputContainer>
                        <Input
                            name="password"
                            id="password"
                            value={newLogin.password}
                            placeholder={"Password"}
                            onChange={handleChange}
                            required
                            type="password"
                            />
                    </InlineInputContainer>
                    <Button>Submit</Button>
            </Form>
        </Container>
    )
}

export default LoginForm;