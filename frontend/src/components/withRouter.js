// withRouter.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

// Define a custom higher-order component (HOC)
export const withRouter = (Component) => {
    // Define a wrapper component that will use useNavigate hook
    const Wrapper = (props) => {
        // Get the navigate function from useNavigate hook
        const navigate = useNavigate();

        // Render the wrapped component and pass navigate as history prop
        return <Component history={navigate} {...props} />;
    };

    return Wrapper;
};
