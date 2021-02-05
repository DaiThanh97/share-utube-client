import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { STORAGE_KEY } from '../../configs/constant'

export default function Auth({ path, component: Component }) {
    return (
        <Route path={path} render={props => {
            const token = localStorage.getItem(STORAGE_KEY.USER_TOKEN);
            if (token && token !== '') {
                return <Component {...props} />
            }
            return <Redirect to="/" />
        }} />
    )
}
