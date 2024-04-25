import { Map, List } from 'immutable';

export function concatElements(page1, page2) {
    if (Array.isArray(page1) && Array.isArray(page2)) {
        const list1 = List(page1)
        const list2 = List(page2)

        const concat = list1.concat(list2)

        return concat
    }
}

export function mergeElements(page1, page2) {
    if (typeof page1 === 'object' && typeof page2 === 'object') {
        const map1 = Map(page1);
        const map2 = Map(page2);

        const mergedMap = map1.mergeWith((oldVal, newVal) => newVal, map2);

        const mergedList = mergedMap.toList();

        return mergedList;
    }
}
