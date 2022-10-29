import React, { useState, useEffect, useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { settingsContext } from "../App";

export default function Settings({ setSettings }) {
  const [user, setUser] = useState(() => sessionStorage.getItem("user") || "");
  const [room, setRoom] = useState(() => sessionStorage.getItem("room") || "");

  const context = useContext(settingsContext);
  useEffect(() => {
    setRoom(context.room || "");
    sessionStorage.setItem("room", context.room);
  }, [context]);

  // eslint-disable-next-line
  useEffect(() => setSettings({ user, room }), []);

  return (
    <div className="settings">


    </div>
  );
}