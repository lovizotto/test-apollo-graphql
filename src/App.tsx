import React, {useState} from 'react';
import './App.css';
import Pipes from "./components/Pipes/Pipes";
import PipeCard from "./components/Pipes/PipeCard";

function App() {
    const [ pipeId, setPipeId ] = useState<number>()
    const handlePipeClick = (pipeId: number) => {
        setPipeId(pipeId)
    }

    return (
        <div className="App">
            <header className="App-header">
                <img
                    src="https://files.readme.io/9e810f9-small-developers3x.png"
                    className="App-logo"
                    alt="logo"
                />
            </header>
            <section>
                <Pipes onClick={handlePipeClick}/>
                { pipeId && (
                    <PipeCard pipeId={pipeId} />
                )}
            </section>
        </div>
    );
}

export default App;
