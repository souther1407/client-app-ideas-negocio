import { URL } from "../../config/config";
class Auth {
  static async getUserData(uid) {
    const response = await fetch(`${URL}/users/${uid}`);
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
}

export default Auth;
