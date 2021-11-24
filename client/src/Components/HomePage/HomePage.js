import React from 'react';
import '../../Styling/HomePage.css'

function HomePage() {
    return (
       <div className="container">
        <h1 className ="first-phase"><span
                class="txt-rotate"
                data-period="2000"
                data-rotate='[ " Welcome  to Optimum.", "Discover your true potential.", "Realign with your best self." ]'>
            </span>
        </h1>
       </div>
    );
}

export default HomePage;
