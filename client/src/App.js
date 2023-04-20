import React, {useContext, useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/Navbar/Navbar";
import {Context} from "./index";
import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";

function App() {

    const {user} = useContext(Context);
    const [loading, isLoading] = useState(true);

    useEffect(() => {
        check().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
        })
            .finally( () => {
                isLoading(false)
            })
    }, []);

    if (loading) {
        return <Spinner animation={'grow'}/>
    };

  return (
    <BrowserRouter className="App">
        <NavBar/>
      <AppRouter/>
    </BrowserRouter>
  );
};

export default App;
