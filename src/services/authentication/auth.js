import { URL } from "../../config/config";
class Auth {
  static async login(user) {
    const response = await fetch(`${URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const body = await response.json();
    return body;
  }
  static async registerUser(user) {
    const response = await fetch(`${URL}/users/create`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const body = await response.json();
    return body;
  }
  static async refreshToken() {
    const response = await fetch(`${URL}/users/refreshToken`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const body = await response.json();
    return body;
  }
}

export default Auth;
