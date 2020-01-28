import React from 'react';
import "./Jumbotron.css";

function Jumbotron() {
    return (
        <div className="jumbotron mt-5">
            <div className="container p-3" id="page-title">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <h1>Google Book Search</h1>
                        <h6>{"(powered by react)"}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jumbotron;