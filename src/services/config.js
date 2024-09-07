import axios from "axios";

//      AxiosAPi / instance
//      baseURL : đường dẫn api tổng của trang web
//      timeOut : thời gian chờ của người dùng , quá thời gian chờ sẽ báo lỗi cho người dùng
//      https://fiverrnew.cybersoft.edu.vn/swagger/index.html
export const http = axios.create({
  baseURL: "https://fiverrnew.cybersoft.edu.vn/api",
  timeout: 20000,
  headers: {
    tokenCyberSOft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2OCIsIkhldEhhblN0cmluZyI6IjE1LzAxLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTczNjg5OTIwMDAwMCIsIm5iZiI6MTcwOTEzOTYwMCwiZXhwIjoxNzM3MDQ2ODAwfQ.15h8Zu___NIMHyUdFGA_OXmW8LeIiC8dEKnAv1v362Q",
  },
});
