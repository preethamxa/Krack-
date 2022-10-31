import { AppBar, Link, Toolbar } from "@material-ui/core";
import React from "react";
import Tuner from "../../../img/header/Tuner.png";
import Metronome from "../../../img/header/Metronome.png";
import VocalTuner from "../../../img/header/VocalTuner.png";


const DropdownNav = () =>
{
    return(
        <>
        <AppBar position="sticky" style={{backgroundColor: "black"}}>
            <Toolbar style={{ display: 'flex', justifyContent: 'space-between'}}>
            <Link to="#"><img src={Tuner} alt="Tuner" /></Link>
            <Link to="#"><img src={Metronome} alt="Metronome"/></Link>
            <Link to="#"><img src={VocalTuner} alt="Vocal Tuner"/></Link>
            </Toolbar>
        </AppBar>
        </>
    );
};

export default DropdownNav;