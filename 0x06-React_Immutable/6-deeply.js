import { Map } from 'immutable';

export default function mergeDeeplyElements(page1, page2) {
    const map1 = Map(page1)
    const map2 = Map(page2)

    const mergedMap = map1.mergeWith((oldVal, newVal) => {
        if (Map.isMap(oldVal) && Map.isMap(newVal)) {
            return oldVal.mergeWith((deepOldVal, deepNewVal) => deepOldVal.merge(deepNewVal), newVal);
        }
        return newVal;
    }, map2);

    const mergedList = mergedMap.toList();

    return mergedList;
}
