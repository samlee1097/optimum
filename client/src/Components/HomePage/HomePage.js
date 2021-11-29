import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Styling/HomePage.css';

function HomePage() {
    const history = useNavigate()
    return (
        <div id="container">
        <h1 className ="first-phase"><span
                class="txt-rotate"
                data-period="2000"
                data-rotate='[ " Welcome  to Optimum.", "Discover your true potential.", "Realign with your best self." ]'>
            </span>
        </h1>
        <button onClick={()=> history("/login")} class="button-30"><span class="text">Enter</span></button>

       </div>
    );
}

export default HomePage;
