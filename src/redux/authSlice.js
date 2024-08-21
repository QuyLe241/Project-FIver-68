import { createSlice } from '@reduxjs/toolkit'
import { getLocalStorage } from '../utils/utils';

//      Tạo nhanh : rxslice
const initialState = {
    //      khi người dùng tắt web và mở lại gọi đến localStorage va hiển thị
    //      lại dữ liệu đăng nhập như: avatar, tên,...

    user: getLocalStorage("user"),
};

const authSlice = createSlice({
  name: "ath",
  initialState,
  reducers: {
    setValueUser: (state, action) => {
        state.user = action.payload;
    },
  },
});

export const {setValueUser} = authSlice.actions

export default authSlice.reducer