import React from 'react';
import { Link } from 'react-router-dom';

import { MainDiv, ListaLinks } from './styles';

const Header: React.FC = () => {

    return (
        <>
            <MainDiv>
                <h3>Fake Detector</h3>
                <ListaLinks>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/servicos">Serviços</Link>
                    </li>
                </ListaLinks>
            </MainDiv>
        </>
    );
}

export default Header;