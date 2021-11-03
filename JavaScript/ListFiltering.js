/*
** List Filtering
** https://www.codewars.com/kata/53dbd5315a3c69eed20002dd
*/

const filter_list = (list) => {
    return list.filter(e => typeof e !== "string")
}