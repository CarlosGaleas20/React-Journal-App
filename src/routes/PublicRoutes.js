import React from 'react'
import { Redirect, Route } from 'react-router'

const PublicRoutes = ({
    isLogged,
    component: Component,
    ...rest
}) => {
    return (
        <Route {...rest}
            component = {(props) => (
                (!isLogged)
                ?
                (<Component {...props} />)
                :
                (<Redirect to="/" />)
            )}
        />
    )
}

export default PublicRoutes;