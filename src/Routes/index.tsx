import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Sobre from '../pages/Sobre';
import Cadastro from '../pages/Cadastro';
import Servicos from '../pages/Servicos';

const Rotas: React.FC = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/sobre' element={<Sobre/>} />
                <Route path='/cadastro' element={<Cadastro/>} />
                <Route path='/servicos' element={<Servicos/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;