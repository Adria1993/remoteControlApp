import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MouseControllerPage } from './mouse-controller';

@NgModule({
  declarations: [
    MouseControllerPage,
  ],
  imports: [
    IonicPageModule.forChild(MouseControllerPage),
  ],
})
export class MouseControllerPageModule {}
