import http from "../http-api";

class AdminDataService {
  getAll() {
    return http.get("/admins");
  }

  get(id) {
    return http.get(`/admins/${id}`);
  }

  create(data) {
    return http.post("/admins", data);
  }

  findByTitle(name) {
    return http.get(`/admins?name=${name}`);
  }
  // service update admin
  update(id, data) {
    return http.put(`/admins/${id}`, data);
  }
  // service delete id
  delete(id) {
    return http.delete(`/admins/${id}`);
  }
  // service delete all
  deleteAll() {
    return http.delete(`/admins`);
  }
}
export default new AdminDataService();