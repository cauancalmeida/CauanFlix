import React from 'react';

function ButtonLink(props){
// props=>{className: "Vai receber o valor"}
    return(
        <button className={props.className} href={props.href}>
              {props.children}      
        </button>
    );
}
export default ButtonLink;