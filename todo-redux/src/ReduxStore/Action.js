import React from 'react'

const AddAction = (payload,dispatch) => {
    return dispatch({
        type:"ADD",
        payload:payload
    })
}



export default AddAction