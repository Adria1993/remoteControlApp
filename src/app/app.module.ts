import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { LongPressModule } from 'ionic-long-press';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InitPage } from '../pages/init/init';
import { ControllerPage } from '../pages/controller/controller';
import {ProgressBarComponent} from '../components/progress-bar/progress-bar';
import { ControllerProvider } from '../providers/controller/controller';
import { MouseControllerPage } from '../pages/mouse-controller/mouse-controller';
import { AudioPlayerControllerPage } from '../pages/audio-player-controller/audio-player-controller';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InitPage,
    ProgressBarComponent,
    ControllerPage,
    MouseControllerPage,
    AudioPlayerControllerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    LongPressModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InitPage,
    ProgressBarComponent,
    ControllerPage,
    MouseControllerPage,
    AudioPlayerControllerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ControllerProvider
  ]
})
export class AppModule {}
