import React from 'react'
const { fromJS } = require('immutable');

function getImmutableObject(object) {
    return (
        fromJS(object)
    )
}

export default getImmutableObject