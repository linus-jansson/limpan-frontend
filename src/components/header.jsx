import React, { Component } from 'react';

import pfp from '../assets/images/pfp.png';

class Header extends Component {
    state = {  } 
    render() { 
        return (
            <section className="header" id="start">
        
                <img className="header_img" src={pfp} alt="Page logo" />
        
                <div className="container">
                    <div className="typewriter header-text">
                        <h1>Hello this is my <span>Website</span>!</h1>
                    </div>
        
                    <div className="subheader">
                        <p> 
                            My name is Linus and I am a <span>mostly</span> selflearned developer from Sweden.
                        </p>
                    </div>
                    
                    <div className="scroll-down">
                        <a href="#portfolio"><span></span>Scroll Down For my Work</a>
                    </div>

                </div>
        
            </section>

        );
    }
}
 
export default Header;