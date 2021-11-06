const restaurant = 'food-band';

const renderItems = (data) => {
  data.forEach((element) => {
    console.log(element);
  });
};

fetch(`https://fooddelivery-a5981-default-rtdb.firebaseio.com/db/${restaurant}.json`)
  .then((response) => response.json())
  .then((data) => {
    renderItems(data);
  })
  .catch((error) => {
    console.log(error);
  });