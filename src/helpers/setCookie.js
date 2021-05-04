export const setCookie = ({ urlAvatar, nameUser, userID }) => {
    document.cookie = `userName=${encodeURIComponent(nameUser)}`;
    document.cookie = `urlAvatar=${encodeURIComponent(urlAvatar)}`;
    document.cookie = `userID=${encodeURIComponent(userID)}`;
}