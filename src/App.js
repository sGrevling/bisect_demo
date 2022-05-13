import {useState} from "react";

function App() {
    const [shoModal, setShoModal] = useState(false);
    const version = 5;
    const buttonBug = null;

    const renderModal = () => shoModal && !buttonBug && (
        <div id="fantastic-modal-wrapper">
            <div id="fantastic-modal">
                <h1>Fantastic modal</h1>
                <p>The modal brings great joy to users, mainly because of the beautiful colour.</p>
            </div>
            <div
                id="fantastic-modal-outside"
                onClick={() => setShoModal(false)}
            />
        </div>
    );

    const renderButton = () => (
        <button
            id="fantastic-button"
            onClick={() => setShoModal(true)}
        >
            Fantastic button
        </button>
    )

    return (
        <div id="app">
            <h1>Fantastic App versjon {version}</h1>
            {renderModal()}
            {renderButton()}
            <div id="other-content">
                <p>More</p>
                <p>perfectly</p>
                <p>mediocre </p>
                <p>content</p>
            </div>
        </div>
    );
}

export default App;
