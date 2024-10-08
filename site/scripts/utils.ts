

/**
 * 
 * @param list an array of any type.
 * @returns one item from the given list.
 */
export function randomFrom(list: any[]): any {
    return list[Math.floor(Math.random() * list.length)]
}
