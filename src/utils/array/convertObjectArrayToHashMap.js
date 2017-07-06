export default function(array, key) {
  return array.reduce((map, item) => {
    const k = item[key];
    map[k] = item;
    return map;
  }, {});
}