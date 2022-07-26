import React from "react";
import ReactDOM from "react-dom/client";
import { GifExpertApp } from "./GifExpertApp";
// import { FirstApp } from "./FirstApp";
// import { App } from "./HelloWorldApp";

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <GifExpertApp />
    </React.StrictMode>

)
