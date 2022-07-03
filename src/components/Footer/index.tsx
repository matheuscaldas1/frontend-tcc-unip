import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {

    return (
        <>
            <div>
                <div>
                    <h3>Fake detector</h3>
                    <div>
                        <strong>Redes sociais</strong>
                        <div>
                            <ul>
                                <li>Whatsapp</li>
                                <li>Twitter</li>
                                <li>Facebook</li>
                            </ul>
                        </div>
                        <div>
                            <strong>Informações</strong>
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
                    </div>
                </div>
            </div>
            <div>
                <p>Fake Detector © Direitos reservados </p>
            </div>
        </>
    )
}

export default Footer;