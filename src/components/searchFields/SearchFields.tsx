import React, { useState } from "react";
import { TextField } from "@mui/material";
import "./searchfields.css";
import List from "./List";

function SearchFields() {
    const [inputText, setInputText] = useState("");

    let inputHandler = (e: any) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    return (
        <div className="main">
            <h1>Search country</h1>
            <div className="search">
                <TextField
                    id="outlined-basic"
                    onChange={inputHandler}
                    value={inputText}
                    variant="outlined"
                    fullWidth
                    label="Country Name"
                />
            </div>
            <List input={inputText} setInputText={setInputText} />
        </div>
    );
}

export default SearchFields;
