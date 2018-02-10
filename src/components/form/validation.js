const proxy = 'http://alloworigin.com/get?url=';

export const sentRequestToUrl = (url) => {
  return fetch(proxy + url).then((res) => {
    return res;
  });
};

