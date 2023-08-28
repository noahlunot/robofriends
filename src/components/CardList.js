import React from 'react';
import Card from './Card';

const CardList = (props) => {
    return (
        <div>
            {
                props.robots.map((Robots, i) => {
                    return <Card key={[i]}  name={props.robots[i].name} id={props.robots[i].id} email={props.robots[i].email}/>
                })
            }
        </div>
    );
}

export default CardList;