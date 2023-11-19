import { Catalog } from "./components/Catalog/Catalog";
import { CreateGame } from "./components/CreateGame/CreateGame";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";

function App() {
    return (
        <div id="box">
            <Header />

            <main id="main-content">

            </main>
            {/* <Home /> */}
            {/* <Login /> */}
            {/* <Register /> */}
            {/* <CreateGame /> */}
            <Catalog />
            <Footer />
        </div>
    );
}

export default App;
