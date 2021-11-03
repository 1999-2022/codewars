const isPangram = (str) => {
    if (!typeof str === "string") return
    return 0 === "abcdefghijklmnopqrstuvwxyz"
        .split("")
        .filter(chr => -1 === str.toLowerCase().indexOf(chr))
        .length
}