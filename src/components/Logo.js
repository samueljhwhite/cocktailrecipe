import React from 'react';
import logoSVG from '../CDBlogo1x3.svg';

function Logo({ resetState }) {
    return (
        <div className='header'>
            <img src={logoSVG} width='105' height='35' alt='logo' onClick={ resetState } /> 
        </div>    
    )
}

export default Logo;