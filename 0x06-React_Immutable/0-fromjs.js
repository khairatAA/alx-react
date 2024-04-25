import { fromJS } from 'immutable';

export default function getImmutableObject(object) {
    if (typeof object === 'object') {
        const map = fromJS(object)

        return map
    }
}
