import React from 'react';
import {Link} from 'react-router-dom';

const StartingPage = () => {
    const css=`
    `
    return(
        <div>
            <style>
                {css}
            </style>
            <div>
                <h1>Bine ai venit!</h1>
            </div>
            <button>
                <Link to='/loginPage' className="link"> <p>Logheaza-te acum!</p></Link>
            </button>
            <button>
                <Link to='/registerPage' className="link"> <p>Creaza un cont acum!</p></Link>
            </button>
        </div>
    );
};

export default StartingPage;