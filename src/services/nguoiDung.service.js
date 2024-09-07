import { http } from "./config";

export const nguoiDungService = {
  //
  getAllUsers: () => {
    return http.get("/users");
  },
  //    delete
  deleteUser: (id) => {
    return http.delete(`/users?id=${id}`);
  },
};
