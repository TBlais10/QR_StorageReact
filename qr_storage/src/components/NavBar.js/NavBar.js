import React, {Fragment} from "react";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import NavButton from "./NavButtons";

const Navbar = (props) => {
    const [auth]  = useContext(AuthContext)

    return (
        <Fragment>
            <div style ={{
                backgroundColor: "#ff6912",
                position: "fixed",
                width: "100%",
                zIndex: 9999,
                top: 0,
                left: 0,
                height: "75px",
                flexDirection: "row",
                alignContent: "center",
                justifyContent: "space-between",
            }}
        >

            <h1 style={{
                fontFamily: "monospace",
                fontWeight: "bold",
                fontSize: "2.5em",
                margin: "0 20px",
            }}>QR Storage</h1>
            <div style={{
                margin: "0 20px",
                flexDirection: 'row',
                background: "transparent",
                userSelect: "none",
                alignItems: "center",
            }}>
                <NavButton to="/" label="Home" />
                <NavButton to="/developers" label="Developers" />
                <NavButton to="/sites" label="Sites" />
                <NavButton to="/items" label="Items" />
                </div>
            </div>
            <div style={{ height: "75px"}} />
        </Fragment>
    )
}

export default Navbar;