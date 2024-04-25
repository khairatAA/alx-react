import { Map } from 'immutable';

export default function getImmutableObject(object) {
    if (typeof object === 'object') {
        const map = Map(object)

        return (map)
    }
}
