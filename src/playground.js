const favoriteFood = "sushi";

const goodFood = {
  [favoriteFood]: true,
};

console.log(goodFood);

const interval = setInterval(() => {
  console.log("I will print every 2 seconds");
}, 2000);

setTimeout(() => {
  clearInterval(interval);
});
