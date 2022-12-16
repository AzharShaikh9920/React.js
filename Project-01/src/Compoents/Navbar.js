import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'


export default function Navbar(props) {
  let location = useLocation();
  useEffect(()=>{
    console.log(location.pathname);
  },[location])
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand " to="/"><strong>{props.title}</strong></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/about"?"active":""}`} to="/about">{props.about}</Link>
        </li>
      </ul>
      <div className={`form-check form-switch text-${props.mode==='dark'?'white':'black'} `}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.BatanText}</label>
</div>
    </div>
  </div>
</nav>
    </div>
  )
}

Navbar.propTypes={
    title : PropTypes.string.isRequired,
    about : PropTypes.string.isRequired
}

Navbar.defaultProps={
    title : 'Enter title here',
    about : 'About'
}

