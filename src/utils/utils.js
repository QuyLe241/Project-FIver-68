export const setLocalStorage = (key, value) => {
  //      chuyển đổi dữ liệu sang Json để lưu xuống local
  const localString = JSON.stringify(value);
  //    gọi đến localStorage và setItem: key định dạng value và localString là value được truyền vào
  localStorage.setItem(key, localString);
};

export const getLocalStorage = (key) => {
    //      gọi đến localStorage và lấy dữ liệu lên
  const dataLocal = localStorage.getItem(key);
  return dataLocal ? JSON.parse(dataLocal) : null;
};
