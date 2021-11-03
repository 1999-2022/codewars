/*
** Extract the domain name from a URL
** https://www.codewars.com/kata/514a024011ea4fb54200004b
*/

const domainName = (url) => {
    if (!typeof url === "string") return
    return url.replace(/.+\/\/|www.|\..+/g, '')
}