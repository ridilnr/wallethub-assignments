// This service is used to allow user to access or not content of readme page
export class AuthService {
  companyEmail = false;

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.companyEmail);
        }, 500);
      }
    );
    return promise;
  }
  // set companyEmail to true is email provided matches 'walletHub' email addresses
  setCompanyEmailStatus() {
    this.companyEmail = true;
  }

  getCompanyEmailStatus() {
    return this.companyEmail;
  }
}
