import React from 'react';

const Footer = (props) =>{
 return(
    <div className="card-footer bg-dark text-white text-center">
        <small>{props.copyright}</small>
    </div>
 )
};


export default Footer;