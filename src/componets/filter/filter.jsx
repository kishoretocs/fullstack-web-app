import React from "react";
import './filter.css';

const Filter = ()=>{
    return (
        <div className="filter-container">
            <div className="">
                <div className="nav-left">
                    <a href="/" className="nav-item">search By Job Title, Role</a>
                    {/* <span className="separator">......</span> */}
                    <a href="/jobs" className="nav-item">Preferred Location</a>
                    {/* <span className="separator">......</span> */}
                    <a href="/talents" className="nav-item">Job Types</a>
                    {/* <span className="separator">......</span> */}
                </div>
            </div>
        </div>
    )
}
export default Filter