const moveZeros = (array) => {
    if (!typeof array === "array") return

    const everyZeroes = array.filter(e => e === 0)
    const nonZeroes = array.filter(e => e !== 0)

    return [...nonZeroes, ...everyZeroes]
}