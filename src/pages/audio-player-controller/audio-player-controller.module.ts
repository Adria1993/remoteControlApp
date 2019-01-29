import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AudioPlayerControllerPage } from './audio-player-controller';

@NgModule({
  declarations: [
    AudioPlayerControllerPage,
  ],
  imports: [
    IonicPageModule.forChild(AudioPlayerControllerPage),
  ],
})
export class AudioPlayerControllerPageModule {}
