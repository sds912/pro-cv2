import { Component, Input , OnInit} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CvBuilderService } from 'src/app/core/services/cv-builder.service';
import { Experience } from 'src/app/models/experience.model';
import { Resume } from 'src/app/models/resume.model';


@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.scss']
})
export class ExperienceFormComponent implements OnInit {

  experienceForm?: FormGroup;
  indexToEdit?: number;
  @Input() public resume?: Resume;
  edit = false;
  constructor(private fb: FormBuilder, private cvBuilderService: CvBuilderService){

  }



  ngOnInit(): void {
    if(this.resume?.experiences?.length === 0){
      this.edit = true;
    }
    this.experienceForm = this.fb.group({
      jobTitle: new FormControl("", Validators.required),
      employer: new FormControl("", Validators.required),
      country: new FormControl("", Validators.required),
      city: new FormControl("", Validators.required),
      startDate: new FormControl("", Validators.required),
      endDate: new FormControl("", Validators.required),
      description: new FormControl(`
      . Création d'une application web 
      . Mise en place d'une api rest
      . Création d'une application mobile 
      `, Validators.maxLength(200))
    });
  }

  /**
   * add new experience
   * @param experience 
   */
  editExperience(experience: Experience, index: number){
    this.experienceForm = this.fb.group(experience);
    this.edit = true;
    this.indexToEdit = index;
  }

  /**
   * add experience 
   */
  addExperience():void {
    if(this.edit){
      if(this.indexToEdit === undefined){
       this.resume?.experiences?.push({...this.experienceForm?.value});
      }else{
        if (this.indexToEdit! >= 0 && this.indexToEdit! < this.resume!.experiences!.length) {
          this.resume!.experiences![this.indexToEdit!] = this.experienceForm?.value;
        }
      }
     this.cvBuilderService.onResumeChange(this.resume!);
     this.edit = false;
     this.experienceForm?.reset();
     this.indexToEdit = undefined;
    }else{
      this.edit = true;
    }

  }

  /**
   * remove experience
   * @param index 
   */
  removeExperience(index: number): void{
   this.resume?.experiences?.forEach((e, i) => {
      if(i === index){
        this.resume?.experiences?.splice(i,1);
      }
   })
  }

  saveForm(): void {
    if(this.resume!.step <= 6){
      this.resume!.step += 1;
    }else{
      this.resume!.step = 4;
    }

    if(this.resume!.step >= 6){
      this.resume!.step -= 1;
    }

    this.cvBuilderService.onStepChange(this.resume!);
   
  }

  goBack(): void{
    if(this.resume?.step! > 1){
      this.resume!.step -= 1;
    }
    this.cvBuilderService.onStepChange(this.resume!);
  }

  

}
