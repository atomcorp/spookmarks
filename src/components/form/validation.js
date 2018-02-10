const proxy = 'http://alloworigin.com/get?url=';

export const sentRequestToUrl = (url) => {
  return fetch(proxy + url).then((res) => {
    console.debug(res);
    return res;
  });
};

