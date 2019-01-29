import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ControllerProvider } from '../../providers/controller/controller';
import { GET } from '../../const/const';
import { Events } from 'ionic-angular';

/**
 * Generated class for the MouseControllerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mouse-controller',
  templateUrl: 'mouse-controller.html',
})
export class MouseControllerPage {
  public xPosition: number;
  public yPosition: number;
  public server: string;
  public canMove:boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public controllerProvider: ControllerProvider, public event:Events) {
    this.server = this.navParams.get("server");
  }

  public resetPosition():void {

  }
  public moveMouseLeft(): void {
    this.controllerProvider.makeGet(this.server, GET.moveMouseToLeft, 12000).then((x) => {

    }).catch((err) => {
      console.log(err);
    });
  }
  public moveMouseRight(): void {
    this.controllerProvider.makeGet(this.server, GET.moveMouseToRight, 12000).then((x) => {

    }).catch((err) => {
      console.log(err);
    })
  }
  public moveMouseUp(): void {
    this.controllerProvider.makeGet(this.server, GET.moveMouseToUp, 12000).then((x) => {

    }).catch((err) => {
      console.log(err);
    })
  }
  public moveMouseDown(): void {
    this.controllerProvider.makeGet(this.server, GET.moveMouseToDown, 12000).then((x) => {

    }).catch((err) => {
      console.log(err);
    })
  }
  public rightClick(){
    this.controllerProvider.makeGet(this.server, GET.rightClick, 120000).then((x) => {

    }).catch((err) => {
      console.log(err);
      
    });
  }
  public leftClick(){
    this.controllerProvider.makeGet(this.server, GET.leftClick, 120000).then((x) => {

    }).catch((err) => {
      console.log(err);
      
    });
  }
  public pressUp():void{
    this.controllerProvider.makeGet(this.server, GET.up,1000).then((x) => {

    });
  }
  public pressDown():void{
    this.controllerProvider.makeGet(this.server, GET.down, 1000).then((x) => {

    });
  }

}
