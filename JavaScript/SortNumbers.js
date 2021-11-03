/*
** Sort Numbers
** https://www.codewars.com/kata/5174a4c0f2769dd8b1000003
*/

const solution = (array) => {
    if (!typeof array === "array" || !array) return []
    return array.sort((a, b) => a - b)
}