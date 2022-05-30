import { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";
import Translate from "./components/Translate";

const items = [
    {
        title: "What is React?",
        content: "React is a front end JavaScript framework",
    },
    {
        title: "Why use React?",
        content: "React is a favorite JS library among engineers",
    },
    {
        title: "How do you use React?",
        content: "You use React by creating components",
    },
];

const options = [
    {
        label: "The Color Red",
        value: "red",
    },
    {
        label: "The Color Green",
        value: "green",
    },
    {
        label: "A Shade of Blue",
        value: "blue",
    },
];

function App() {
    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            {/* <Accordion items={items} /> */}
            {/* <Search /> */}
            {/* <Dropdown
                label="Select a Color"
                options={options}
                selected={selected}
                onSelectedChange={setSelected}
            /> */}
            <Translate />
        </div>
    );
}

export default App;
