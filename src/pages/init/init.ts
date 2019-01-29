import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ControllerProvider } from '../../providers/controller/controller';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
import { GET } from '../../const/const';


/**
 * Generated class for the InitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-init',
  templateUrl: 'init.html',
})
export class InitPage {
  buttonDisabled: boolean = false;
  loadProgress: number;
  url: string[];
  ip: string;
  cont: number;
  private servers: any[];
  private readonly homePage: any = HomePage;

  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public controller: ControllerProvider, public viewCntrl: ViewController) {
  }
  ngOnInit() {
    this.loadProgress = 0;
    this.url = [];
    this.servers = [];
    this.cont = 0;
  }
  ionViewDidLoad() {    
    for (let i = 1; i <= 255; i++) {
      this.url.push(`http://192.168.1.${i}:3000`);
    }
  }
  public doAlert() {
    let alert = this.alertCtrl.create({
      title: 'No server found!',
      subTitle: 'Please research server, or maybe you can start server',
      buttons: ['Ok']
    });

    alert.present();
  }

  public reached(){
    this.buttonDisabled = false;
      if (this.servers.length > 0) {
        this.navCtrl.push(this.homePage, {
          servers: this.servers
        }).then((x) => {
        });
      } else {
        this.loadProgress = 0;
        this.cont = 0;
        this.doAlert();
      }
  }

  public updateLoadProgress(): void {
    this.cont++;
    var percentage = this.cont / 255 * 100;
    this.loadProgress = Math.round(percentage * 100) / 100
    if (this.loadProgress >= 100) {
      this.reached();
    }
  }

  public searchMother(): any {
    this.buttonDisabled = true;
    this.cont = 0;
    this.loadProgress = 0;
    this.servers = [];
    for (let uri in this.url) {
      try {
        this.controller.makeGet(this.url[uri], GET.hello, 1000).then((x) => {
          this.servers.push(x);
          this.updateLoadProgress();
          return;
        }).catch((e) => {
          this.updateLoadProgress();
        });
      } catch (e) {
        this.updateLoadProgress();
      }
    }

  }


  public setLoadProgress(value: number) {
    this.loadProgress = value;
  }
}
