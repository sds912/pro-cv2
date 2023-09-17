import { Component } from '@angular/core';
import { HEADER, EDUCATION, EXPERIENCE } from 'src/app-constant';
import { CvBuilderService } from 'src/app/core/services/cv-builder.service';
import { Resume } from 'src/app/models/resume.model';

const initialResume: Resume = {
  header: {
    jobTitle: "Ingénieur Etude et Développemnt",
    firstName: "Papa Babacar Ngor",
    lastName: "Senghor",
    phone: "+221777443663",
    email: "senghor.pape912@hotmail.com",
    city: "Dakar",
    country: "Sénégal",
    postal: "11500",
    avatar: "../../../assets/avatar.png"
  },
  educations: [
    {
      school: "Sonatel Academy",
      adresse: "Dakar-Senegal",
      diplome: "BTS",
      domaine: "Développement Web et Mobile",
      month: "Janv",
      year: "2023"
    }
  ],
  experiences: [
    {
      jobTitle: "Ingénieur Etude et Développemnt",
      employer: "ATOS",
      country: "Sénégal",
      city: "Dakar",
      startDate: "2023-01-01",
      endDate: "2024-01-01"
    }
  ]
}

@Component({
  selector: 'app-cv-builder',
  templateUrl: './cv-builder.component.html',
  styleUrls: ['./cv-builder.component.scss']
})
export class CvBuilderComponent {

  public step = HEADER;
  public resume:  Resume = {};

  constructor(private cvBuilderService: CvBuilderService){
    cvBuilderService.onResumeChange(initialResume);
    this.cvBuilderService.resume!
    .subscribe(resume =>{
      this.resume = resume;
    })
  }

  get HEADER(){
    return HEADER;
  }
  get EDUCATION(){
    return EDUCATION;
  }

  get EXPERIENCE(){
    return EXPERIENCE;
  }
  navigate(step: string): void {
   this.step = step;
  }

}
