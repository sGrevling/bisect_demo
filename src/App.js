import {useState} from "react";
import {BinarySearch} from "./BinarySearch";

function App() {
    const [fantastic, setFantastic] = useState(1);
    const version = 24;
    const buttonBug = '🐛';

    return (
        <div id="app">
            <h1>Fantastic App versjon {version}</h1>
            <h2>Hvor fantastisk?</h2>
            <div data-testid="amount-fantastic" id="fantastic-div">{fantastic} fantastisk!</div>
            <button
                id="fantastic-button"
                onClick={() => buttonBug || setFantastic(pv => pv + 1)}
            >
                Gjør mer fantastisk
            </button>
            <br/>
            <div id="other-content">
                <BinarySearch version={version}/>
            </div>
        </div>
    );
}

export default App;
