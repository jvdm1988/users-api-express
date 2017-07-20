import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs/add/operator/toPromise";

@Injectable()
export class AuthServiceService {

  constructor(
    private httpThang: Http
  ) { }

// POST signup
// an argument for each "req.body" in the API route
signup(theFullName, theEmail, thePassword) {
  return this.httpThang
  .post(
    "http://localhost:3000/api/signup",
    // Form  body information to send to the back end (req.body)
    {
      signupFullName: theFullName,
      signupEmail: theEmail,
      signupPassword: thePassword
    },

    //send the cookies across domains
    {withCredentials: true}
  )
  .toPromise()
  .then(res => res.json())
  }


  // POST login
  login(theEmail, thePassword) {
    return this.httpThang
    .post(
      "http://localhost:3000/api/login",
      {
        blahEmail: theEmail,
        blahPassword: thePassword
      },
      {withCredentials: true}
    )
    // convert from observable to promise
    .toPromise()
    // parse the JSON
    .then(res => res.json());
  }


  // POST logout
  logout() {
    return this.httpThang
    .post(
      "http://localhost:3000/api/logout",

      {},

      {withCredentials: true}
    )
    .toPromise()

    .then(res => res.json());
  }

  // GET checklogin
  checklogin () {
return this.httpThang
.get(
  "http://localhost:3000/api/checklogin",

  {withCredentials: true}
)

.toPromise()
.then(res =>res.json());

}
}
