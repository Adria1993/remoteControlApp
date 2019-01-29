import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ControllerProvider } from '../../providers/controller/controller';
import {GET, POST} from '../../const/const';


/**
 * Generated class for the AudioPlayerControllerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-audio-player-controller',
  templateUrl: 'audio-player-controller.html',
})
export class AudioPlayerControllerPage {
  volume:number;
  private server: string;
  public visible: boolean = true;
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
  public changeVolume(event:any):void{
    this.controllerProvider.makePost(this.server, POST.setVolume, this.volume).then((x) => {
    }).catch((err) => {
      console.log(err);
    });
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
  public playOrPause():void{
    if(this.visible){
      console.log("play");
      this.visible = !this.visible;
    }
    else{
      console.log("pause");
      this.visible = true;
    }
    this.controllerProvider.makeGet(this.server, GET.pauseAudio, 1000).then((x) => {

    }).catch((err) => {
      console.log(err);
    })
  }
  public nextSong(){
    this.controllerProvider.makeGet(this.server, GET.nextSong, 1000).then((x) => {
      console.log("Song Skipped");
    }).catch((err) => {
      console.log(err);
    });
  }
  public previousSong(){
    this.controllerProvider.makeGet(this.server, GET.previousSong, 1000).then((x) => {
      console.log("Previous Song");
    }).catch((err) => {
      console.log(err);
    });
  }

}
