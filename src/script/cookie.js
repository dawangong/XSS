const setCookie = (name, value, time) => {
  const nowDate = new Date();
  nowDate.setDate(nowDate.getDate() + time);
  document.cookie = `${name}=${value};expires=${time}`
};

const getCookie = name => {
  const params = document.cookie.split(';');
  params.forEach(item => {
    const keyValue = item.split('=');
    return name === keyValue[0] ? keyValue[1] : '';
  });
};

const deleteCookie = name => {
  setCookie(name , 1, -1)
};

export {
  setCookie,
  getCookie,
  deleteCookie
}
