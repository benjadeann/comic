import React, { useContext } from "react";
import StylesContext from "./StylesContext";

export default function RequestFormButton() {
    const buttonStyling = React.useContext(StylesContext);

    return (
        <div style={{padding:"30px"}}>
            <button style={buttonStyling}>Click Here!</button>
            <input type="submit" value="Submit" style={buttonStyling} />
        </div>
    );
}