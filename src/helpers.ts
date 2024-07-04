import { DeleteItem } from "./types";

// local storage
export const fetchData = (key: string) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

export const deleteItem = ({ key }: DeleteItem) => {
  return localStorage.removeItem(key);
};
