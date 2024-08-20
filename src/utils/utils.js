export const setLocalStorage = (key, value) => {
  //      chuyển đổi dữ liệu sang Json để lưu xuống local
  const localString = JSON.stringify(value);
  localStorage.setItem(key, value);
};

export const getLocalStorage = (key) => {
    //      gọi đến localStorage và lấy dữ liệu lên
  const dataLocal = localStorage.getItem(key);
  return dataLocal ? JSON.parse(dataLocal) : null;
};
