export default () => {
  const array = [];
  let referrence = 0;
  for (let i = 0; i < 16; i++) {
    referrence = i % 2 === 0 ? referrence + 1 : referrence;
    array.push({
      id: i,
      referrence: referrence
    });
  }
  return array;
};
