import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {

return (
    <>
      <div>
        <h3>Fake Detector</h3>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/sobre">Sobre</Link>
                </li>
                <li>
                    <Link to="/servicos">Serviços</Link>
                </li>
            </ul>
        </div>
      </div>  
    </>
);
}

export default Header;