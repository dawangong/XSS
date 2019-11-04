import { setCookie, getCookie, deleteCookie } from './script/cookie'

setCookie('userName', 'leon');
setCookie('password', 123);

document.write(document.cookie);
