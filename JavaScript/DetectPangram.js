/*
** Detect Pangram
** https://www.codewars.com/kata/545cedaa9943f7fe7b000048
*/

const isPangram = (str) => {
    if (!typeof str === "string") return
    return 0 === "abcdefghijklmnopqrstuvwxyz"
        .split("")
        .filter(chr => -1 === str.toLowerCase().indexOf(chr))
        .length
}