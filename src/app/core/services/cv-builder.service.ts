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

  private apiKey = 'de0f1cd7ac737d66c1a05242065f3c3d';
  private apiUrl = 'https://api.imgbb.com/1/upload';

  public resume? : BehaviorSubject<Resume> = new BehaviorSubject({
    step: 1
  })

   constructor(private http: HttpClient){

   }

   onResumeChange(resume: Resume){
    this.resume?.next(resume);
    localStorage.setItem('pro-cv', JSON.stringify(resume));
   }

   onStepChange(resume: Resume){
      this.resume?.next(resume);
      localStorage.setItem('pro-cv', JSON.stringify(resume));
   }

   downloadPdf(resume: Resume){
    const local = `${LOCAL_BASE_URL}/pdf`;
    const remote = `${REMOTE_BASE_URL}/pdf`;

    return this.http.post(local, resume, {
      responseType: 'blob',
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    });
   }

   uploadPicture(file: File): any{
    const local = `${LOCAL_BASE_URL}/upload`;
    const remote = `${REMOTE_BASE_URL}/upload`;
  
    let formData:FormData = new FormData();
    formData.append('uploadFile', file);
    formData.append('name', file.name);
    
   return  this.http.post(local, formData)
}

uploadImage(image: File) {
  const formData = new FormData();
  formData.append('image', image);
  formData.append('key', this.apiKey);

  return this.http.post(this.apiUrl, formData);
}

  
}

