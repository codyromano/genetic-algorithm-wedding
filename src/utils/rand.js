export default function(min, max, floor = true) {
  const range = max - min;
  const random = min + (Math.random() * range);

  return floor ? Math.floor(random) : random;
};
  