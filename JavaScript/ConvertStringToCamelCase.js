const toCamelCase = (text) => {
    if (!text) return ""
    text = text.replace(/_/gi, "-").split("-")
    var ans = [text[0]]
    for (var i = 1; i < text.length; i++) {
        ans.push(text[i].charAt(0).toUpperCase() + text[i].slice(1));
    }
    return ans.join("");
}