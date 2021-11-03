/*
** Moving Zeros To The End
** https://www.codewars.com/kata/52597aa56021e91c93000cb0
*/

const moveZeros = (array) => {
    if (!typeof array === "array") return

    const everyZeroes = array.filter(e => e === 0)
    const nonZeroes = array.filter(e => e !== 0)

    return [...nonZeroes, ...everyZeroes]
}