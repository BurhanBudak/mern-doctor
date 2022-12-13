import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import App from '../src/components/App';


const container = document.getElementById("root");
console.log(container)
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);