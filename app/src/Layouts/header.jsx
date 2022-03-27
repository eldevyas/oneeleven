import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";






function Logo() {
    return (
      <img 
      src={'/src/assets/img/logo.png'}
      alt="Logo"
      className="Logo"
      />
    );
}

function Menu() {
    let Visible = false;
    
    function Toggle() {
        if (Visible == true) {
            $('.Menu a').css('animation', 'Unvisible 0.5s ease forwards');
            $('#Switch').css('transform', 'rotate(0deg)');
            Visible = false;
        } else if (Visible == false) {
            $('.Menu a').css('animation', 'Visible 0.5s ease forwards');
            $('#Switch').css('transform', 'rotate(-180deg)');
            Visible = true;
        }
    }
    
    return (
        <div className="Menu">
            <a>Home</a>
            <a>Projects</a>
            <div className= "nav-toggle open" id="Switch" onClick={Toggle}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <a>About</a>
            <a>Contact</a>
        </div>
    )
};


function Buttons() {
    let navigate = useNavigate(); 
    const Login = () => { 
        let path = `/login`; 
        navigate(path);
    }

    const Register = () => { 
        let path = `/register`; 
        navigate(path);
    }
    return(
        <div className="Buttons">
            <div className="Button Sign-in" onClick={Login}>Sign in</div>
            <div className="Button Sign-up" onClick={Register}>Sign up</div>
        </div>
    );
}

function DesktopComponent(){
    return (
        <div className="Header">
                <Logo/>
                <Menu/>
                <Buttons />
        </div>
    )
}


function MobileComponent() {
    let MobileVisible = false;
    function MobileToggle() {
        if (MobileVisible == true) {
            $('.NavMobile').css('opacity', '0');
            $('.NavMobile').css('visibility', 'hidden');
            $('#mobileSwitch').css('transform', 'rotate(0deg)');
            MobileVisible = false;

            $('#mobileSwitch').mouseover(function(){
                $('#mobileSwitch').css('transform', 'rotate(-90deg)');
            })

            $('#mobileSwitch').mouseout(function(){
                $('#mobileSwitch').css('transform', 'rotate(0deg)');
            })
        } else if (MobileVisible == false) {
            $('.NavMobile').css('opacity', '1');
            $('.NavMobile').css('visibility', 'visible');
            $('#mobileSwitch').css('transform', 'rotate(90deg)');
            MobileVisible = true;

            $('#mobileSwitch').mouseover(function(){
                $('#mobileSwitch').css('transform', 'rotate(90deg)');
            })

            $('#mobileSwitch').mouseout(function(){
                $('#mobileSwitch').css('transform', 'rotate(0deg)');
            })
        }
    }

    return (
        <div className="mobileHeader">
            <img
                src={'/src/assets/img/logo.png'}
                alt="Logo"
                className="Logo"
            />

            <div className="ToggleMobile" id="mobileSwitch" onClick={MobileToggle}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div className="NavMobile">
                <a>Home</a>
                <a>Projects</a>
                <a>About</a>
                <a>Contact</a>
                <div className="Sign-in">Sign-in</div>
                <div className="Sign-up">Sign-up</div>
            </div>
        </div>
    )
}

const ResponsiveHeader = () => {
    // Declare a new state variable with the "useState" Hook
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 990;
  
    React.useEffect(() => {
      /* Inside of a "useEffect" hook add an event listener that updates
         the "width" state variable when the window size changes */
      window.addEventListener("resize", () => setWidth(window.innerWidth));
  
      /* passing an empty array as the dependencies of the effect will cause this
         effect to only run when the component mounts, and not each time it updates.
         We only want the listener to be added once */
    }, []);
  
    return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
  }

function Header() {
    
    return (
        <ResponsiveHeader/>
    )
};

export default Header;
