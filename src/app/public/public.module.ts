import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';

import { PublicRoutingModule } from '@/public/public-routing.module';
import { SharedModule } from '@/core/shared/shared.module';

import { PublicComponent } from '@/public/public.component';
import { HomeComponent } from '@/public/home/containers/home.component';
import { LoginComponent } from '@/public/login/containers/login.component';

@NgModule({
  declarations: [PublicComponent, HomeComponent, LoginComponent],
  imports: [
    // CommonModule,
    // BrowserModule,
    PublicRoutingModule,
    SharedModule],
})
export class PublicModule {}
