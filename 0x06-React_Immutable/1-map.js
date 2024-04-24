import React from 'react'
const { Map } = require('immutable');

function getImmutableObject(object) {

    const map = Map(object)

    return (map)
}

export default getImmutableObject
