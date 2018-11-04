import React from 'react';

const Result = (props) => {
    return(
        <div>
            <h1>Well Done!</h1>
            <h2>Your result is: {Math.round(props.result)} %</h2>
        </div>
    )
}
export default Result;