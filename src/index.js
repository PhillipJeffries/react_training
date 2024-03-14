import React from "react";

import Recipe from "./components/Recipe.jsx";

import data from "./data/data.json";

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Recipe props={data}/>);