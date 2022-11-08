import * as React from 'react'
import { render } from "react-dom";
import { Navbar } from '../components/navbar/Navbar';
import ReactDOM from "react-dom/client";

const navbarDiv = document.getElementById('inviso-navbar')

if(navbarDiv){
    const root = ReactDOM.createRoot(navbarDiv as HTMLElement)
    root.render(
        <Navbar />
    )
}