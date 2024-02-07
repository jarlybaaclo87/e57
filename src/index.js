import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Section1 from "./components/Section_1";
import Message from "./components/Message";
import Button from "./components/Button";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <div>
        <App/>
        <Section1/>
        <Button/>
        <Message/>
    </div>
);