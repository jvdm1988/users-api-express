import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs/add/operator/toPromise";

@Injectable()
export class AuthServiceService {

  constructor(
    private httpThang: Http
  ) { }

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

  // POST signup
  // POST login
  // POST logout
  // GET checklogin
}
