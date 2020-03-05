const colors = [
  "red",
  "yellow",
  "blue",
  "cyan",
  "orange",
  "purple",
  "green",
  "pink"
];

export default () => {
  const array = [];
  for (let i = 0; i < 8; i++) {
    array.push({
      color: colors[i]
    });
    array.push({
      color: colors[i]
    });
  }
  const shuffledArray = shuffle(array);
  return shuffledArray;
};

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
