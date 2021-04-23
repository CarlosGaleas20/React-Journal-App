import React from 'react'
import { Redirect, Route } from 'react-router'

const PrivateRoutes = ({
    isLogged,
    component: Component,
    ...rest
}) => {


    return (
        <Route {...rest}
            component = {(props) => (
                (isLogged)
                ?
                (<Component {...props} />)
                :
                (<Redirect to="/auth/login" />)
            )}
        />
    )
}

export default PrivateRoutes;
