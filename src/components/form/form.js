const form = document.querySelector('.form');
const title = form.querySelector('.js--title');
const link = form.querySelector('.js--link');

const handleSubmit = (e) => {
  e.preventDefault();
  const data = {
    title: title.value,
    link: link.value,
  };
  return data;
};

form.addEventListener('submit', handleSubmit);


