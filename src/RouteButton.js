import React from "react";
import { Route } from 'react-router-dom';


const RouteButton = (props) => {
    return (
        <Route render={({ history }) => (
            <button onClick={() => {
                history.push({
                    pathname: props.pathname,
                    data: props.data,
                });
            }}>
                {props.value}
            </button>
        )}
        />
    )
}

export default RouteButton;