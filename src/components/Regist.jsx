import React from "react";
// import "./App.scss";
import Login from "../pages/register/Login";
import Page2 from "../pages/register/Page2";
import Page4 from "../pages/register/Page4";
import Page3 from "../pages/register/Page3";
import Page1 from "../pages/register/Page1";

export default function Regist(props) {
  const result = React.useRef({});

  const [page, setPage] = React.useState(1);

  function changePagePlus() {
    setPage(page + 1);
  }

  return (
    <div>
      {page === 1 ? (
        <Login next={changePagePlus} setUser={props.setUser} />
      ) : page === 2 ? (
          <Page1 next={changePagePlus} result={result} />
      ) : page === 3 ? (
        <Page2 next={changePagePlus} result={result} />
      ) : page === 4 ? (
        <Page3 next={changePagePlus} result={result} />
      ) : page === 5 ? (
        <Page4 next={changePagePlus} result={result} setUser={props.setUser} />
      ) : null}
    </div>
  );
}
