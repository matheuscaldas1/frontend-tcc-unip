import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Sobre from '../pages/Sobre';

const Rotas: React.FC = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/sobre' element={<Sobre/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;