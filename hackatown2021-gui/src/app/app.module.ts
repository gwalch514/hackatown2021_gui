import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgOpenCVModule } from 'ng-open-cv';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { OpenCVOptions } from 'ng-open-cv/public_api';
import { HelloComponent } from './hello/hello.component';
 


const openCVConfig: OpenCVOptions = {
  scriptUrl: `assets/opencv/opencv.js`,
  wasmBinaryFile: 'wasm/opencv_js.wasm',
  usingWasm: true
};


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    NgOpenCVModule.forRoot(openCVConfig),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
