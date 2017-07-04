export default function debouncer(fn, minDelayBetweenCalls = 1000) {
  let argumentsQueue = [];
  let processing = false;

  const process = () => {
    if (argumentsQueue.length) {
      fn(...argumentsQueue.shift());
      setTimeout(process, minDelayBetweenCalls);
    } else {
      processing = false;
    }
  };

  return (...args) => {
    argumentsQueue.push(args || []);
    (!processing && process());
  };
}