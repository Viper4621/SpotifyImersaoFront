import "./App.css";
import Header from "./Header/Header";
import Sidebar from "../src/Sidebar/Sidebar";
import Main from "./Main/Main";

function App() {
  return (
    <div>
      <Sidebar />
      <Header />
      <Main />
    </div>
  );
}

export default App;
