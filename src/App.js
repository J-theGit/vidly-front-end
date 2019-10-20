import React from "react";
import "./App.css";
import Movies from "./components/movies";

function App() {
    return (
        <React.Fragment>
            <main className="container">
                <h1>Vildy app</h1>
                <Movies />
            </main>
        </React.Fragment>
    );
}

export default App;
