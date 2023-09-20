import React from 'react';

const Card = (props) => {
    return(
        <div className="tc bg-light-green dib br3 pa3 ma2 bw2 shadow-5">
            <img width="250px" height="250px" alt="robot" src={`https://robohash.org/${props.id}?size=250x250`}/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default Card;