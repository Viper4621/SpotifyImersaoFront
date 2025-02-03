import "./App.css";
import Header from "./Header/Header";
import Sidebar from "../src/Sidebar/Sidebar";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div>
      <Sidebar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
