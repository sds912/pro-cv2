import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Resume } from 'src/app/models/resume.model';

@Injectable({
  providedIn: 'root'
})
export class CvBuilderService {

  public resume? : BehaviorSubject<Resume> = new BehaviorSubject({})

   constructor(){
     
   }

   onResumeChange(resume: Resume){
    this.resume?.next(resume);
   }
}
