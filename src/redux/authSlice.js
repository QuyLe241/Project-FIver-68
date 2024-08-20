import { createSlice } from '@reduxjs/toolkit'
import { getLocalStorage } from '../utils/utils';

const initialState = {
    //      khi người dùng tắt web và mở lại gọi đến localStorage va hiển thị
    //      lại dữ liệu đăng nhập như: avatar, tên,...

    user: getLocalStorage("user"),
}

const authSlice = createSlice({
  name: ath,
  initialState,
  reducers: {
    setValueUser: (state, payload) => {
        state.user = payload;
    }
  }
});

export const {setValueUser} = authSlice.actions

export default authSlice.reducer