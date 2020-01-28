import React from 'react';

function SavedContainer(props) {
    return (
        <div className="card">
            <img className="card-img-top"
                alt={props.title}
                src={props.image} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
            </div>
            <div className="card-body">
                <p className="card-text">Author: {props.author}</p>
            </div>
            <div className="card-body">
                <a href={props.link} className="btn btn-primary">More info</a>
            </div>
        </div>
    );
}