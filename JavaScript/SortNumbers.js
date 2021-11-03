const solution = (array) => {
    if (!typeof array === "array" || !array) return []
    return array.sort((a, b) => a - b)
}