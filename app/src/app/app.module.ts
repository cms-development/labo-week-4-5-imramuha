import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,  HTTP_INTERCEPTORS  } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CreaturesComponent } from './components/creatures/creatures.component';
import { NavComponent } from './components/nav/nav.component';
import { CreatureComponent } from './components/creatures/creature/creature.component';

import { JwtInterceptor } from './helpers/jwt.interceptor';
import { CreatureCreateComponent } from './components/creatures/creature-create/creature-create.component';
import { CreatureUpdateComponent } from './components/creatures/creature/creature-update/creature-update.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreaturesComponent,
    NavComponent,
    CreatureComponent,
    CreatureCreateComponent,
    CreatureUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
