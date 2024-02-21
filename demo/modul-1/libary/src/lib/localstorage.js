export const setLocalStorage = (key, value) => {
  localStorage.setItem(
    key,
    /* key */
    JSON.stringify(value)
    /* value */
  );
};
export const getLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
export const removeLocalStorage = (key) => {
  localStorage.removeItem(key);
};
export const clearLocalStorage = () => {
  localStorage.clear();
};
