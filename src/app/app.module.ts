import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule, RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { WorksComponent } from './works/works.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PhotoswipeBgComponent } from './photoswipe-bg/photoswipe-bg.component';
import { PreloaderComponent } from './preloader/preloader.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    WorksComponent,
    SkillsComponent,
    ContactsComponent,
    PhotoswipeBgComponent,
    PreloaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RecaptchaModule.forRoot()
  ],
  providers: [{
    provide: RECAPTCHA_SETTINGS,
    useValue: {
      siteKey: '6Ld7im0UAAAAAAcR8b4cK6fK21nb1QRAg_c6WfBM',
      theme: 'dark',
    } as RecaptchaSettings,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
