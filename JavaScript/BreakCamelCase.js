const solution = (string) => {
    return string.replace(/([a-z0-9])([A-Z])/g, '$1 $2')
}