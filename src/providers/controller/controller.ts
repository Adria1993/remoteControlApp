import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import 'rxjs/add/operator/timeout';

/*
  Generated class for the ControllerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ControllerProvider {
  public urlString: string = "";
  public urls: any[] = [];

  constructor(public http: Http, public events: Events) {

  }
  public makePost(ip: string, suffix: string, parameter: any): Promise<any> {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    const requestOptions = new RequestOptions({ headers: headers });

    let postData = {
      "volume": parameter,
    }
    return new Promise((res, rej) => {
      this.http.post(ip.concat(suffix), postData, requestOptions)
        .subscribe(data => {
          res(data['_body']);
        }, error => {
          rej(error);
        });
    });
  }

  public makePostMoveMouse(ip: string, suffix: string, parameterX: any, parameterY:any): Promise<any> {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    const requestOptions = new RequestOptions({ headers: headers });

    let postData = {
      "x": parameterX,
      "y": parameterY
    }
    return new Promise((res, rej) => {
      this.http.post(ip.concat(suffix), postData, requestOptions)
        .subscribe(data => {
          res(data['_body']);
        }, error => {
          rej(error);
        });
    });
  }

  public makeGet(ip: string, suffix: string, timeout:number): Promise<any> {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    const requestOptions = new RequestOptions({ headers: headers });

    if (ip !== "" && suffix !== "") {
      return new Promise((res, rej) => {
        this.http.get(ip.concat(suffix), requestOptions)
          .timeout(timeout)
          .subscribe(data => {
            res(JSON.parse(data["_body"]));
          },
            err => {
              rej(err);
            });
      });
    }
    else {
      return null;
    }
  }
  

}
