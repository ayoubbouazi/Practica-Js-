export function saveUser(user) {
    window.sessionStorage.setItem('userId', user.id);
}