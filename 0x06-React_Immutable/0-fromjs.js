import { fromJS } from 'immutable';

export function getImmutableObject(object) {
    const map = fromJS(object)

    return map
}
