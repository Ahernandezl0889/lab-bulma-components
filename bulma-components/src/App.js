import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Form from './component/Form';
import CoolButton from './component/CoolButton';

function App() {
  return (
    <div className="App">
   
   <nav className="navbar is-transparent">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"></img>
    </a>
    <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item" href="https://bulma.io/">
        Home
      </a>
      
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="field is-grouped">
          <p className="control">
            <a className="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms">
              <span className="icon">
                <i className="fab fa-twitter"></i>
              </span>
              <span>
                Login
              </span>
            </a>
          </p>
          <p className="control">
            <a className="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.7.5/bulma-0.7.5.zip">
              <span className="icon">
                <i className="fas fa-download"></i>
              </span>
              <span>SignUp</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>

{/* i have to call the form because this is what we are going to render */}

<div className='newForm'>
  <Form label="Name" type="text" placeholder="e.g Alex Smith" />
  <Form label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
</div>



<CoolButton isSmall={true} isDanger={true} isOutlined />
      {/* if you just put the prop name its the same as saying = {true} */}
      {/* so these 2 lines do the same thing */}
      <CoolButton isRounded isDark isLarge />
      



















    </div>
  );
}

export default App;
