const domainName = (url) => {
    if (!typeof url === "string") return
    return url.replace(/.+\/\/|www.|\..+/g, '')
}