export default function deepFreeze(obj) {
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'object' && value !== null) {
      obj[key] = deepFreeze(value);
    }
  }
  return Object.freeze(obj);
}