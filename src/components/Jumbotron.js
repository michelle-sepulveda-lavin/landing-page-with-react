import React from 'react';

const Jumbotron = props => {
    return (
        <div className="jumbotron">
            <h1 className="display-4">{props.mainTitle}</h1>
            <p className="lead">{props.mainDescription}</p>
            <a className="btn btn-primary btn-lg" href={props.mainButtonURL} role="button">{props.mainButtonLabel}</a>
        </div>
    )
};

export default Jumbotron;