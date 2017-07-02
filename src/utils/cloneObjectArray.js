export default function(objArray) {
  const newArray = [];

  objArray.forEach(obj => newArray.push(
    Object.assign({}, obj)
  ));

  return newArray;
};