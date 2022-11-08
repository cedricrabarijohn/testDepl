import * as React from 'react'
import { render } from "react-dom";
import { App } from "../components/App";
import ReactDOM from "react-dom/client";

const appDiv = document.getElementById('app')
if(appDiv){
    const root = ReactDOM.createRoot(appDiv as HTMLElement);
    root.render(
        <App />
    )
}