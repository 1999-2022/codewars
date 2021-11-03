/*
** Convert string to camel case
** https://www.codewars.com/kata/517abf86da9663f1d2000003
*/

const toCamelCase = (text) => {
    if (!text) return ""
    text = text.replace(/_/gi, "-").split("-")
    var ans = [text[0]]
    for (var i = 1; i < text.length; i++) {
        ans.push(text[i].charAt(0).toUpperCase() + text[i].slice(1));
    }
    return ans.join("");
}