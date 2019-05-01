import React from "react";


const Photos = props => {
    return (
        <div>
        {props.loc.location}
        <img src={props.loc.img} />
        </div>

    );
};

export default Photos;