import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { ControllerProvider } from '../../providers/controller/controller';
import { NavParams, ViewController } from 'ionic-angular';
import { InitPage } from '../init/init';
import { ControllerPage } from '../controller/controller';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  brightness: number = 0;
  public servers: any[] = [];
  constructor(public navCtrl: NavController, public http: Http, public controllerProvider: ControllerProvider, public navParams: NavParams, public viewCntrl: ViewController) {
    this.servers = this.navParams.get("servers");
  }

  public serverClicked(ip): void {
    this.navCtrl.push(ControllerPage, { server: ip })
  }
  ionViewDidLoad() {

  }

  public searchAgain() {
    this.navCtrl.push(InitPage).then(() => {
      const index = this.viewCntrl.index;
      this.navCtrl.remove(index);
    });
  }


}
