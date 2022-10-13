export function getData(cb, defaultValue = '') {
  try {
    if (typeof cb !== 'function') return defaultValue;
    return cb();
  } catch {
    return defaultValue;
  }
}