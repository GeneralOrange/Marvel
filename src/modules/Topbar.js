import React from 'react'
import '../styles/modules/topbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Topbar = ({ title }) => {
    return(
        <div className="topbar">
            <h1>{title}</h1>
        </div>
    );
}

export default Topbar;
