import { Map } from 'immutable';

export default function accessImmutableObject(object, array) {
    let value = object;

    for (const key of array) {
        if (value === undefined || value === null) {
            return undefined;
        }

        if (typeof value.get === 'function') {
            value = value.get(key);
        } else if (typeof value === 'object' && value.constructor === Object) {
            value = value[key];
        } else {
            return undefined;
        }
    }

    return value;
}
