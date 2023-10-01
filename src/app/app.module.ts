import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServicesComponent } from './components/services/services.component';
import { HomeComponent } from './pages/home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HeaderFormComponent } from './components/forms/header-form/header-form.component';
import { ExperienceFormComponent } from './components/forms/experience-form/experience-form.component';
import { EducationFormComponent } from './components/forms/education-form/education-form.component';
import { CvBuilderComponent } from './pages/cv-builder/cv-builder.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Templates01Component } from './components/templates/templates01/templates01.component';
import { Templates02Component } from './components/templates/templates02/templates02.component';
import { DateFormatPipe } from './date-format.pipe';
import { CompetencesFormComponent } from './components/forms/competences-form/competences-form.component';
import { LanguagesFormComponent } from './components/forms/languages-form/languages-form.component';
import { ColorPalletComponent } from './components/color-pallet/color-pallet.component';
import { HttpClientModule} from '@angular/common/http';
import { QuillModule } from 'ngx-quill';
import { ImageCropperModule } from 'ngx-image-cropper';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ServicesComponent,
    HomeComponent,
    HeaderFormComponent,
    ExperienceFormComponent,
    EducationFormComponent,
    CvBuilderComponent,
    Templates01Component,
    Templates02Component,
    DateFormatPipe,
    CompetencesFormComponent,
    LanguagesFormComponent,
    ColorPalletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    CarouselModule,
    ReactiveFormsModule,
    HttpClientModule,
    QuillModule.forRoot(),
    ImageCropperModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
