/*
** Break camelCase
** https://www.codewars.com/kata/5208f99aee097e6552000148
*/

const solution = (string) => {
    return string.replace(/([a-z0-9])([A-Z])/g, '$1 $2')
}