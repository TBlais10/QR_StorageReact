import React, { useContext } from "react";
import Container from "../../common/Container";
import Splash from "../../common/Splash";
import splashImg from "../../assets/home_qrstorage.jpg"
import { AuthContext } from "../../Providers/AuthProvider"

const Home = () => {
    const [auth] = useContext(AuthContext);

    return(
        <Container>
            <Splash
                image={splashImg} style={{
                    color:"#716391"
                }}>
                    <h1 style={{
                        textShadow: '1px 1px black'
                    }}>Welcome to QR Storage</h1>
                    <h2 style={{
                        textShadow: '1px 0 0 #000, 0 1px 0 #000, -1px 0 0 #000'
                    }}>
                        Organization is just a tap away
                    </h2>
                </Splash>
        </Container>
    )
}

export default Home;