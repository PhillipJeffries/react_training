console.log('dgb')

import React from "react";

import { render } from "react-dom";

import Recipe from "./components/Recipe";

import data from "./data/data.json";

render(<Recipe props={data}/>, document.getElementById("root"));