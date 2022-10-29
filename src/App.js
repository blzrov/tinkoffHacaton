import React from "react";
import "./App.scss";
import Regist from "./components/Regist";
import Page2 from "./pages/register/Settings.jsx";
import Page3 from "./pages/register/Page2.jsx";
import Page4 from "./pages/register/Page3.jsx";
import Page5 from "./pages/register/Page4.jsx";
import Profile from "./pages/register/Profile.jsx";

function App() {
  const [state, setState] = React.useState(1);

  React.useEffect(async () => {
    await fetch("http://127.0.0.1:8000/getUser/?user_login=Kolya_wolf").then(
      (res) => console.log(res)
    );
  }, []);
  return (
    <div className="App">
      {state === 1 ? <Profile /> : state === 4 ? <Page2 /> : null}
    </div>
  );
}

export default App;
