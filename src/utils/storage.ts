const getValue = (key: string) => {
  return localStorage.getItem(key);
};

const addValue = (
  key: string,
  value: Record<string, string | number | boolean>[] | string
) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

export { getValue, addValue };
