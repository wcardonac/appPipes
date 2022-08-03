import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//modulo personalizado

import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';
// vamel  a cambiar le el idioama a la aplicacion 

import localES from '@angular/common/locales/es-CO';
import localFR from '@angular/common/locales/fr';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localES)//regustramos el idioma en este caso es español(co)
registerLocaleData(localFR)//regustramos el idioma en este caso es frances(co)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRouterModule,
    VentasModule
  ],
  providers: [
    {provide:LOCALE_ID,useValue:'es-CO'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
