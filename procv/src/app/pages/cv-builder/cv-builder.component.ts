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
  public initialResume: Resume = {
    header: {
      avatar:{localUrl: "../../../assets/avatar.png", remoteUrl: ""}
    },
    educations: [],
    experiences: [],
    skills: [],
    languages: [],
    step: 1,
    theme: COLORS[0]
  }

  constructor(private cvBuilderService: CvBuilderService){
    
  }


  ngOnInit(): void {
   
    if(localStorage.getItem('pro-cv') !== null){
      this.initialResume = JSON.parse(localStorage.getItem('pro-cv')!);
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
  

}
