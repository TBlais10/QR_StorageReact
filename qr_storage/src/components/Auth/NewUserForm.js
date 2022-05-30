import React from "react";
import Container from "../../common/Container";
import Form from "../../common/Form";
import InlineInputContainer from "../../common/InlineInputContainer";
import Input from "../../common/Input";
import Button from "../../common/Button";

const NewUserForm = ({onSubmit, onChange, newUser}) => {
    
    const handleChange = (e) => {
        onChange(e.target.it, e.target.value)
    }

    return(
        <Container>
            <Form onSubmit={onSubmit} style={{marginTop: '1em'}}>
                <InlineInputContainer>
                    <Input
                    name="fName"
                    id="fName"
                    value={newUser.fName}
                    placeholder={"First Name"}
                    onChange={handleChange}
                    required
                    />
                    <Input
                    name="lName"
                    id="lName"
                    value={newUser.lName}
                    placeholder={"Last Name"}
                    onChange={handleChange}
                    required
                    />
                </InlineInputContainer>
                <InlineInputContainer>
                    <Input 
                    name="email"
                    id="email"
                    value={newUser.email}
                    placeholder={"Email"}
                    onChange={handleChange}
                    type="email"
                    required
                    />
                </InlineInputContainer>
                <InlineInputContainer>
                    <Input 
                    name="password"
                    id="password"
                    value={newUser.password}
                    placeholder={"Password"}
                    onChange={handleChange}
                    type="password"
                    required
                    />
                </InlineInputContainer>
                <InlineInputContainer>
                    <Input 
                    name="age"
                    id="age"
                    value={newUser.age}
                    placeholder={"Age"}
                    onChange={handleChange}
                    type="number"
                    required
                    />
                    <Input 
                    name="gender"
                    id="gender"
                    value={newUser.gender}
                    placeholder={"Gender"}
                    onChange={handleChange}
                    required
                    />
                </InlineInputContainer>
                <Button>Submit</Button>
            </Form>
        </Container>
    )

}

export default NewUserForm;