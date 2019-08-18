import React from 'react';
import logoSVG from '../CDBlogo1x3.svg';

function Logo() {
    return (
        <div className='navBar'>
            <img src={logoSVG} width='105' height='35' alt='logo'/> 
        </div>    
    )
}

export default Logo;