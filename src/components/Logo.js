import React from 'react';
import logoSVG from '../CDBlogo1x3.svg';

function Logo({ resetSearchAndActiveID }) {
    return (
        <div className='navBar'>
            <img src={logoSVG} width='105' height='35' alt='logo' onClick={ resetSearchAndActiveID } /> 
        </div>    
    )
}

export default Logo;