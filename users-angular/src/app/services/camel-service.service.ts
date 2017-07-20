import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class CamelServiceService {

  constructor(
    private httpThang: Http
  ) { }

// POST Camels
newCamel(theName, theColor, theHumps) {
  return this.httpThang
  .post(
    "http://localhost:3000/api/camels",
    {
      camelName:theName,
      camelColor: theColor,
      camelHumps: theHumps
    },
    {withCredentials: true}
  )

  //Parse the JSON
  .map(res => res.json());
}


// GET Camels
allCamels() {
  return this.httpThang
  .get(
    "http://localhost:3000/api/camels",

    {withCredentials: true}
  )
  //Parse the JSON
  .map(res => res.json());
}

}
