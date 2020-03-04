export default () => {
  const array = [];
  let link = 0;
  for (let i = 0; i < 16; i++) {
    link = i % 2 === 0 ? link + 1 : link;
    array.push({
      id: i,
      link: link,
      clickable: true
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
