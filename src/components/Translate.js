import React, { useState } from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";

const options = [
    {
        label: "Afrikaans",
        value: "af",
    },
    {
        label: "Arabic",
        value: "ar",
    },
    {
        label: "Hindi",
        value: "hi",
    },
];

export default function Translate() {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState("");

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
            </div>
            <Dropdown
                options={options}
                selected={language}
                onSelectedChange={setLanguage}
                label="Select a Language"
            />
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert text={text} language={language} />
            <div>Note: Translate API will only work on localhost:3000</div>
        </div>
    );
}
