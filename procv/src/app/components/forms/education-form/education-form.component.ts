import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CvBuilderService } from 'src/app/core/services/cv-builder.service';
import { Education } from 'src/app/models/education.model';
import { Experience } from 'src/app/models/experience.model';
import { Resume } from 'src/app/models/resume.model';

const DIPLOMES = ["BAC", "BTS", "DEUG", "MASTER", "LICENCE"];
const MONTHS = [
  "Janv",
  "Fév",
  "Mar",
  "Avr",
  "Mai",
  "Juin",
  "Juil",
  "Août",
  "Sept",
  "Oct",
  "Nov",
  "Déc"
];








@Component({
  selector: 'app-education',
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.scss']
})
export class EducationFormComponent implements OnInit {
  @Input() public resume?: Resume ;
  public edit = false;
  public educationForm?: FormGroup;
  years:any = [];
  currentYear = new Date().getFullYear(); 
  indexToEdit?: number;
  constructor(private fb: FormBuilder, private cvBuilderService: CvBuilderService){

  }

  ngOnInit(): void {
    this.educationForm = this.fb.group({
      school: new FormControl("", [Validators.required]),
      adresse: new FormControl("", [Validators.required]),
      diplome: new FormControl("", [Validators.required]),
      domaine: new FormControl("", [Validators.required]),
      month: new FormControl("", [Validators.required]),
      year: new FormControl("", [Validators.required]),
    })
    this.initYears()
  }


  get DIPLOMES (){
    return DIPLOMES;
  }

  get MONTHS (){
    return MONTHS;
  }

   /**
   * add new Education
   * @param Education 
   */
   editEducation(education: Education, index: number){
    this.educationForm = this.fb.group(education);
    this.edit = true;
    this.indexToEdit = index;
  }

  /**
   * add Experience 
   */
  addEducation():void {
    if(this.edit){
      if(this.indexToEdit === undefined){
       this.resume?.educations?.push({...this.educationForm?.value});
      }else{
        if (this.indexToEdit! >= 0 && this.indexToEdit! < this.resume!.educations!.length) {
          this.resume!.educations![this.indexToEdit!] = this.educationForm?.value;
        }
      }
     this.cvBuilderService.onResumeChange(this.resume!);
     this.edit = false;
     this.educationForm?.reset();
     this.indexToEdit = undefined;
    }else{
      this.edit = true;
    }

  }

  /**
   * remove Experience
   * @param index 
   */
  removeEducation(index: number): void{
   this.resume?.educations?.forEach((e, i) => {
      if(i === index){
        this.resume?.educations?.splice(i,1);
      }
   })
  }

 
  initYears(): void{
 // Remplir le tableau avec les 30 dernières années
 for (let i = this.currentYear; i >= this.currentYear - 29; i--) {
  this.years.push(i.toString());
}
  }
 
  

}
