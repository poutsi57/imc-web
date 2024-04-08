import React from "react";
export default function Card(props) {
    return(<><li>
    <div id="bor">
    <p id="name"> {props.role}</p>
    <div id="pic"><img alt='p1' src={props.img}></img></div>
    <h3>{props.name}</h3>
    <a href="#"><img alt='f1' id="contact" src="face.png" ></img></a>
    </div></li></>);    
}