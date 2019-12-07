import React from 'react';
import './Header.css'
import logo from '../../img/logo.svg'
import { Search } from '../Search/Search';

const Header = () =>
(
    <header>
        <div className="wrapper">
            <img className="logo" src={logo}></img>
            <Search/>
        </div>
    </header>
)

export {Header};