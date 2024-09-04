//      Lấy tất cả thông tin người dùng
// rxslice  Tạo nhanh 1 reducer
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { nguoiDungService } from "../services/nguoiDung.service";

//      Tạo reduxThunk
//      tạo biến đẻ lấy dữ liệu . ở craeteAsyncThunk truyền type và hàm bất đông bộ để thêm và lấy dữ liệu về

export const getValueUserApi = createAsyncThunk(
  "nguoiDung/getValueUserApi",
  async (_, ThunkAPI) => {
    const result = await nguoiDungService.getAllUsers();
    console.log(result);
    //  result cho ra giá trị của payload
    return result.data.content;
  }
);

const initialState = {
  listUsers: [],
};

const nguoiDungSlice = createSlice({
  //      reduxThunk là 1 middleWare giúp thực hiện các tác vụ bất đồng bộ
  //          khi bắn các action từ dưới component lên store để xử lý
  //      extraReducers dùng để sử dụng các tác vụ bất đồng bộ
  //      có 3 trạng thái xảy ra ở extraReducers :
  //      - fulfilled: thành công
  //        - đang chạy
  //        - thất bại
  name: "nguoiDung",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getValueUserApi.fulfilled, (state, action) => {
      console.log(action);
      state.listUsers = action.payload;
    });
    builder.addCase(getValueUserApi.pending, (state, action) => {
      console.log("đang chờ xử lý");
    });
    builder.addCase(getValueUserApi.rejected, (state, action) => {
      console.log("đang bị lỗi");
    });
  },
});

export const {} = nguoiDungSlice.actions;

export default nguoiDungSlice.reducer;
