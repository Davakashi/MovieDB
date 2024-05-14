import "./App.css";
import { Header } from "./component/Header";
import { Poster } from "./component/Poster";

function App() {
    return (
        <div className="App">
            <div className="Container">
                <Header />
                <Poster />
            </div>
        </div>
    );
}

export default App;
