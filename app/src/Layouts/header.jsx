import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import {getRandomColor,createImageFromInitials} from './../Components/Utils/Profile'
import FavoriteIcon from '@mui/icons-material/Favorite';
import LogoutIcon from '@mui/icons-material/Logout';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {auth} from '../firebase'

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
            <a className='active'>Home</a>
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




function ProfilePic() {
    let user = auth.currentUser.displayName ;
	let imgSrc = auth.currentUser.photoURL;
    console.log(imgSrc);
	return (
        <img
            id='ProfilePicture'
            src={
                imgSrc == null
                    ? createImageFromInitials(500, user, getRandomColor())
                    : imgSrc
            }
            alt='profile-pic'
            className='User'
        />
	);
}

const Username = () => {
    let name = auth.currentUser.displayName.replace(/ .*/,'');
    return(
        <div className='Username'>{name}</div>
    )
}

const Panel = () => {

    let navigate = useNavigate(); 
    const Login = () => { 
        let path = `/login`; 
        navigate(path);
    }

    function signOut() {
        auth.signOut().then(function() {
            Login();
        }).catch(function(error) {
            alert("Error while logging out")
        });
    }

    return(
        <div className='Panel' id='Panel'>
            <div className='Item Saved'>
                <FavoriteIcon/>
                <p>Saved</p>
            </div>

            <div className='Item Logout' onClick={signOut}>
                <LogoutIcon/>
                <p>Logout</p>
            </div>
        </div>
    )
}

const Profile = () => {
    let Expanded = false; 

    

    function showPanel(){
        $('.Profile').css('border-radius', '10px 10px 0 0')
        $('#Panel').css('height', '100px');
        $('#Panel').css('opacity', '1');
        $('#Panel').css('visibility', 'visible');

    }

    function hidePanel(){
        $('.Profile').css('border-radius', '10px')
        $('#Panel').css('height', '0px');
        $('#Panel').css('opacity', '0');
        $('#Panel').css('visibility', 'hidden');

    }

    function TogglePanel(){
        if (Expanded === false){
            showPanel();
            Expanded = true;
        }
        else if (Expanded === true){
            hidePanel();
            Expanded = false;
        }
    }

    return (
        <div className="Profile">
            <ExpandMoreIcon id='Icon' onClick={TogglePanel}/>
            <Username/>
            <ProfilePic />
            <Panel/>
        </div>
    )
}



const UserloggedIn = () => {
    return (
        <div className="Header">
                <Logo/>
                <Menu/>
                <Profile />
        </div>
    )
}

const UserloggedOut = () => {
    return (
        <div className="Header">
                <Logo/>
                <Menu/>
                <Buttons />
        </div>
    )
}

const DesktopComponent = () => {
    const [isLoggedin, setIsLoggedIn] = React.useState(false);
    auth.onAuthStateChanged(function(user) {
      setIsLoggedIn(!!user);
    });
    return (
      <>
        {isLoggedin ? (<UserloggedIn />) : (<UserloggedOut/>)}
      </>
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
                <a className='active'>Home</a>
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
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 990;

    React.useEffect(() => {
      window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);
  
    return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
  }

function Header() {
    return (
        <ResponsiveHeader/>
    )
};

export default Header;
