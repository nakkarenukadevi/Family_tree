import { Provider } from "react-redux"
import './App.css';
import Store from "./Store/Store";
import Header from "./Header/Header"
import { Outlet } from "react-router-dom";


function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Header />
        <Outlet />

      </div>
    </Provider>
  );
}

export default App;
