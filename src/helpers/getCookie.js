export const getCookie = () => {
    const cookie =  document.cookie;
    let infoCookie = cookie.split('; ').reduce((accum, current) => {
        accum[current.split('=')[0]] = decodeURIComponent(current.split('=')[1]);
        return accum
    }, {})
    return infoCookie;
}