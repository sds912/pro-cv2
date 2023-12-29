import { HttpHeaders } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HEADER, EDUCATION, EXPERIENCE, COLORS } from 'src/app-constant';
import { CvBuilderService } from 'src/app/core/services/cv-builder.service';
import { Resume } from 'src/app/models/resume.model';
 

@Component({
  selector: 'app-cv-builder',
  templateUrl: './cv-builder.component.html',
  styleUrls: ['./cv-builder.component.scss']
})
export class CvBuilderComponent implements OnInit {

  public step = HEADER;
  public resume?:  Resume;
  public isChangingModel = false;
  public initialResume: Resume = {
    header: {
      avatar:{
        localUrl: '../../../assets/avatar.png', 
        remoteUrl: ''
      },
      phone:    '77 744 36 63',
      postal:   '11500',
      firstName:'Papa Babacar Ngor',
      lastName: 'Senghor',
      email:    'senghor.pape912@hotmail.com',
      jobTitle: 'Développeur FullStack Java/Angular',
      country: 'Sénégal',
      city:    'Dakar'
    },
    educations: [
      {
        school:  'SONATEL ACADEMY',
        adresse: 'Dakar-Sénégal',
        diplome: 'CERTIFICAT',
        domaine: 'Développement Web et Mobile',
        month:   'Mar',
        year:    '2019'
      },
      {
        school:  'UCAD',
        adresse: 'Dakar-Sénégal',
        diplome: 'LICENCE',
        domaine: 'Informatique',
        month:   'Jan',
        year:    '2016'
      }
    ],
    experiences: [
      {
        jobTitle:    'Ingénieur Etude et Développement',
        employer:    'ATOS',
        country:     'Sénégal',
        city:        'Dakar',
        startDate:   '2022-01-02',
        endDate:     '2022-01-02',
        contract:    'CDI',
        description: `
        <ul>
          <li>Conception d'application JAVA/ANGULAR</li>
          <li>Conception d'API Rest JAVA Springboot</li>
          <li>Intégration frontend Angular</li>
          <li>Gestion base de donnée MYSQL</li>
        </ul>
        `
      },
      {
        jobTitle:    'Développeur Fullstack',
        employer:    'Asma Softeware',
        country:     'Sénégal',
        city:        'Dakar',
        startDate:   '2022-01-02',
        endDate:     '2022-01-02',
        contract:    'CDD',
        description: `
        <ul>
          <li>Conception d'application JAVA/ANGULAR</li>
          <li>Conception d'API Rest JAVA Springboot</li>
          <li>Intégration frontend Angular</li>
          <li>Gestion base de donnée MYSQL</li>
        </ul>
        `
      },
      {
        jobTitle:    'DevOps',
        employer:    'Baamtu',
        country:     'Sénégal',
        city:        'Dakar',
        startDate:   '2023-01-02',
        endDate:     '2023-01-02',
        contract:    'CDI',
        description: `
        <ul>
          <li>Conception d'application JAVA/ANGULAR</li>
          <li>Conception d'API Rest JAVA Springboot</li>
          <li>Intégration frontend Angular</li>
          <li>Gestion base de donnée MYSQL</li>
        </ul>
        `
      },
      {
        jobTitle:    'Développeur Fullstack',
        employer:    'GROUP SONATEL',
        country:     'Sénégal',
        city:        'Dakar',
        startDate:   '2023-01-02',
        endDate:     '2023-01-02',
        contract:    'STAGE',
        description: `
        <ul>
          <li>Conception d'application JAVA/ANGULAR</li>
          <li>Conception d'API Rest JAVA Springboot</li>
          <li>Intégration frontend Angular</li>
          <li>Gestion base de donnée MYSQL</li>
        </ul>
        `
      }
    ],
    skills: [
      {
        name: "JAVA",
        level: 8
      },
      {
        name: "ANGULAR",
        level: 7
      },
      {
        name: "MYSQL",
        level: 7
      },
      {
        name: "JENKINS",
        level: 6
      },
      {
        name: "KAFKA",
        level: 6
      }
    ],
    languages: [
      {
        name: "Français",
        level: 9
      },
      {
        name: "Anglais",
        level: 8
      }
    ],
    step: 1,
    theme: {
      name: "theme 1",
      colors:
        {
          primary: "#533B4D",
          secondary: "#F564A9",
          muted: "#FAA4BD"
        }
      
    },
    templateName: undefined
  }

  constructor(private cvBuilderService: CvBuilderService){
    
  }


  ngOnInit(): void {
   
    if(localStorage.getItem('pro-cv') !== null){
      this.initialResume = JSON.parse(localStorage.getItem('pro-cv')!);
      this.cvBuilderService.onResumeChange(this.initialResume);

    }else{
      localStorage.setItem('pro-cv', JSON.stringify(this.initialResume));
      this.cvBuilderService.onResumeChange(this.initialResume);

    }
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


  downloadPdf() {
    this.cvBuilderService.downloadPdf(this.resume!).subscribe((data) => {
      const blob = new Blob([data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      window.open(url); // Open the PDF in a new tab/window
    });

  }


  onSelectTemplate(title: string){
     this.resume!.templateName = title;
     this.cvBuilderService.onResumeChange(this.resume!);
  }
  

}
