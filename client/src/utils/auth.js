import decode from 'jwt-decode';

class Auth {
  login(idToken) {
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken);

    window.location.assign('/');
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  }

  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/');
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token');
  }

  getProfile() {
    return decode(this.getToken());
  }
}

export default new Auth();