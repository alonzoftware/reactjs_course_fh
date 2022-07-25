import React from "react";
import ReactDOM from "react-dom/client";
import { CounterApp } from "./CounterApp";
import { FirstApp } from "./FirstApp";
import { App } from "./HelloWorldApp";

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <FirstApp title="Hola Soy Goku" subTitle={123} />
    </React.StrictMode>
    // <React.StrictMode>
    //     <CounterApp value={10} />
    // </React.StrictMode>
)
