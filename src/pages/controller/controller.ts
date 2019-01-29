import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ControllerProvider } from '../../providers/controller/controller';
import { GET, POST } from '../../const/const';
import { MouseControllerPage } from '../mouse-controller/mouse-controller';
import { AudioPlayerControllerPage } from '../audio-player-controller/audio-player-controller';
/**
 * Generated class for the ControllerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-controller',
  templateUrl: 'controller.html',
})
export class ControllerPage {
  volume: number = 0;
  private server: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public controllerProvider: ControllerProvider) {
    this.server = this.navParams.get("server");
  }

  ionViewDidLoad() {
    this.controllerProvider.makeGet(this.server, GET.volume, 1000).then((x) => {
      this.volume = x.volume;
    }).catch((err) => {
      console.log(err);
    })
  }
  public closeActualWindow(): void{
    this.controllerProvider.makeGet(this.server, GET.closeActualWindow, 1000).then((x) => {
      console.log(x);
      
    }).catch((err) => {
      console.log(err);
    })
  }
  public volumeDown(): void {
    if (this.volume > 0) {
      this.volume--;
    }
  }
  public volumeUp(): void {
    if (this.volume < 100) {
      this.volume++;
    }
  }
  public pressSpace(): void {
    this.controllerProvider.makeGet(this.server, GET.pause, 1000).then((x) => {

    }).catch((err) => {
      console.log(err);

    });
  }
  public pressEnter(): void {
    this.controllerProvider.makeGet(this.server, GET.enter, 1000).then((x) => {

    }).catch((err) => {
      console.log(err);
    })
  }
  public pressUp(): void {
    this.controllerProvider.makeGet(this.server, GET.up, 1000).then((x) => {

    });
  }
  public pressDown(): void {
    this.controllerProvider.makeGet(this.server, GET.down, 1000).then((x) => {

    });
  }
  public pressTabulator(): void {
    this.controllerProvider.makeGet(this.server, GET.tabulator, 1000).then((x) => {

    });
  }
  public pressRight(): void {
    this.controllerProvider.makeGet(this.server, GET.right, 1000).then((x) => {

    });
  }
  public pressLeft(): void {
    this.controllerProvider.makeGet(this.server, GET.left, 1000).then((x) => {

    });
  }
  public changeVolume(ev: any) {
    this.controllerProvider.makePost(this.server, POST.setVolume, this.volume).then((x) => {
    }).catch((err) => {
      console.log(err);
    });
  }
  public mouseController() {
    this.navCtrl.push(MouseControllerPage, { server: this.server });
  }
  public audioController(): void {
    this.navCtrl.push(AudioPlayerControllerPage, { server: this.server });
  }

}
