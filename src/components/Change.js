import React from 'react';
import { useState } from "react"
import { Sale } from './Sale';
import { Buy } from './Buy'
import './Styles.css';

export function Change(){
    const [modallsOpen,SetModallsOpen]=useState(false);

    function ChangeSale(){
        SetModallsOpen(true);
    } 
    function ChangeBuy(){
        SetModallsOpen(false);
    }

    return (
        <div>
            <button className='Sale'  onClick={ChangeSale}>Sell</button>
            <button className='Buy' onClick={ChangeBuy}>buy</button>
            {modallsOpen? <Sale/>:<Buy/>}
        </div>
    );
}