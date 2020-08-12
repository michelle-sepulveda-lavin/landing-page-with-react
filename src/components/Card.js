import React from 'react';

const Card = (props) => {
    return (
        <div className="col-md-3 mb-3">
            <div className="card ">
                <img src={props.imageURL} className="card-img-top img-fluid" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-center">{props.title}</h5>
                    <p className="card-text text-center">{props.description}</p>
                </div>
                <div className="card-footer d-flex justify-content-center">
                    <a href={props.buttonURL} className="btn btn-primary">{props.buttonLabel}</a>
                </div>
            </div>
        </div>
    )
};

export default Card;