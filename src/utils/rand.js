export default function(min, max) {
  return Math.floor(
    min + (Math.random() * (max - min))
  );
};
  