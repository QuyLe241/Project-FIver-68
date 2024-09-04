import { http } from "./config";

export const nguoiDungService = {
  //
  getAllUsers: () => {
    return http.get("/users");
  },
};
