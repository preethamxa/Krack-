import React from "react";
import { Grid, Typography, Link } from "@material-ui/core";
import logo from "../../../img/common/Footerlogo.png";
import google from "../../../img/common/download-from-google.png";
import apple from "../../../img/common/download-from-apple.png";
import fb from "../../../img/common/facebook.svg";
import insta from "../../../img/common/insta.svg";
import yt from "../../../img/common/youtube.svg";

const Footer = () =>
{
    const footerstyle ={
        backgroundColor: '#EF6925',
        //min-height: '100vh', 
        // width: '100vw',
        display: 'flex',
        paddingBottom: 50,
        paddingLeft: 70,
    }
    return(
        <>
        <Grid container style={footerstyle}>
            
                <Grid item xs={12} sm={4} md={4}>
                    <Typography  style={{paddingTop: 50}}><img src={logo} alt="krack"/></Typography>
                    <Typography  style={{color: "white"}}>A unit of Cresirge Pvt. Ltd.</Typography>
                    <Typography  style={{paddingTop: 20}}><img src={fb} alt="fb" style={{paddingLeft: 10}}/> <img src={insta} alt="insta" style={{paddingLeft: 10}}/> <img src={yt} alt="yt" style={{paddingLeft: 10}}/></Typography>
                </Grid>
                <Grid item xs={12} sm={3} md={4}>
                    <Typography  style={{paddingTop: 50, color:"white"}}><h2>About us</h2></Typography>
                    <Typography  style={{ paddingTop: 10, paddingBottom:5}}><Link to="#" style={{color:"white"}}>Tune your Instrument</Link></Typography>
                    <Typography  style={{ paddingTop: 10, paddingBottom:5}}><Link to="#" style={{color:"white"}}>Contact</Link></Typography>
                    <Typography  style={{ paddingTop: 10, paddingBottom:5}}><Link to="#" style={{color:"white"}}>Privacy Policy</Link></Typography>
                    <Typography  style={{ paddingTop: 10, paddingBottom:5}}><Link to="#" style={{color:"white"}}>Terms & Condition</Link></Typography>
                </Grid>
                <Grid item xs={12} sm={3} md={4}>
                    <Typography style={{paddingTop: 50, color:"white", fontWeight: "Bold"}}><h2>Learners App</h2></Typography>
                    <Typography  style={{ paddingTop: 10, paddingBottom:5}}><Link to="#"><img src={apple} alt=""/></Link></Typography>
                    <Typography  style={{ paddingTop: 10, paddingBottom:10}}><Link to="#"><img src={google} alt=""/></Link></Typography>
                </Grid>
        </Grid>
        </>
    )
};

export default Footer;