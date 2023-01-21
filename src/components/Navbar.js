import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <div>
       <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <a className="navbar-brand" hrf="/">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <a className="nav-link" hrf="/">Home </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" hrf="/">{props.aboutText}</a>
      </li>
     
    </ul>
  
  </div>

  <div className={`form-check form-switch text-${props.mode==='light' ?'dark':'light'} `}>
  <input className="form-check-input" type="checkbox" onClick={props.togglemode } style={props.mystylo} id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">enable darkmode</label>
</div>
</nav>
    </div>
  )
}
//to chck proptype kaunsa type send kar rheho in props
Navbar.propTypes={

 title: PropTypes.string.isRequired,
 aboutText: PropTypes.string
}

Navbar.defaultProps={

    title:'set title',
    aboutText: 'about'
   };