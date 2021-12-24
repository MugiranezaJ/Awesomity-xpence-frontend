import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import { Login } from "../components/view/login";
import { CreateAccount } from "../components/view/createAccount";

const history = createBrowserHistory()
export function AppRoutes(){
    return(
        <BrowserRouter history={history}>
            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='/create_account' element={<CreateAccount/>}/>
            </Routes>
        </BrowserRouter>
    )
}