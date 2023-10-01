import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Resume } from 'src/app/models/resume.model';

const REMOTE_BASE_URL = "https://pro-cv-api.onrender.com/api/v1";
const LOCAL_BASE_URL = "http://localhost:8080/api/v1";

@Injectable({
  providedIn: 'root'
})
export class CvBuilderService {

  public resume? : BehaviorSubject<Resume> = new BehaviorSubject({
    step: 1
  })

   constructor(private http: HttpClient){

   }

   onResumeChange(resume: Resume){
    localStorage.setItem('pro-cv', JSON.stringify(resume));
    this.resume?.next(resume);
    localStorage.setItem('pro-cv', JSON.stringify(resume));
   }

   onStepChange(resume: Resume){
      localStorage.setItem('pro-cv', JSON.stringify(resume));
      this.resume?.next(resume);
      localStorage.setItem('pro-cv', JSON.stringify(resume));
   }

   downloadPdf(resume: Resume){
    const local = `${LOCAL_BASE_URL}/pdf`;
    const remote = `${REMOTE_BASE_URL}/pdf`;

    return this.http.post(remote, resume, {
      responseType: 'blob',
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    });
   }

   uploadPicture(event: any): any{
    const local = `${LOCAL_BASE_URL}/upload`;
    const remote = `${REMOTE_BASE_URL}/upload`;
    let fileList: FileList = event.target.files;
    if (fileList.length < 1) {
      return;
    }
    
    let file: File = fileList[0];
    let formData:FormData = new FormData();
    formData.append('uploadFile', file);
    formData.append('name', file.name);
    
   return  this.http.post(remote, formData)
}

 

  
}

