export default class UniqueArray {
  constructor(values = []) {
    this.values = values;
    this.table = {};

    this.values.forEach(value => this.addToHash(value));
  }
  push(value) {
    if (!this.exists(value)) {
      this.values.push(value);
      this.addToHash(value);
    }
  }
  insert(value, index) {
    if (!this.exists(value) && this.values[index]) {
      this.values[index] = value;
      this.addToHash(value);
      return true;

    } else if (!this.values[index]) {
      throw new RangeError(`Index ${index} out of bounds in
        array: `, this.values);
    }
    return false;
  }
  exists(value) {
    const key = this.getHashKey(value);
    return this.table.hasOwnProperty(key);
  }
  addToHash(value) {
    const key = this.getHashKey(value);
    this.table[key] = true;
  }
  getHashKey(value) {
    if (typeof value === 'object' && value !== null) {
      return JSON.stringify(value);
    } else {
      return value;
    }
  }
}