import { Component,Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CvBuilderService } from 'src/app/core/services/cv-builder.service';
import { Resume, Skill } from 'src/app/models/resume.model';

const LEVEL = [1,2,3,4,5,6,7,8,9,10];
const SKILLS = ['JAVA', 'PHP', 'PYTHON', 'CSS', 'HTML', 'MYSQL', 'SPRINGBOOT', 'ANGULAR','REACT', 'JAVASCRIPT','POSTGRES SQL', 'GIT', 'JENKINS', 'DOCKER', '.NET', 'VUE', 'NODE'];

@Component({
  selector: 'app-competences-form',
  templateUrl: './competences-form.component.html',
  styleUrls: ['./competences-form.component.scss']
})
export class CompetencesFormComponent {
  @Input() public resume?: Resume ;
  public edit = false;
  public skillForm?: FormGroup;
  public indexToEdit?: number;
  public skillControl: FormControl = new FormControl(null, Validators.required);
  public opened = false;
  public results: string[] = [];
  constructor(private fb: FormBuilder, private cvBuilderService: CvBuilderService){

  }

  ngOnInit(): void {
    this.skillForm = this.fb.group({
      name: new FormControl(null, [Validators.required]),
      level: new FormControl(null, [Validators.required])
    })
    this.results = this.SKILLS;
  }

 get LEVEL (){
  return LEVEL;
 }

 get SKILLS(){
  return SKILLS;
 }
 
 onChange($event:any, skill: Skill){
    this.resume?.skills?.forEach( v =>{
      if(v.name?.toLowerCase().includes(skill?.name?.toLowerCase()!)){
        v.level =  $event?.target?.value;
      }
    })
    this.cvBuilderService.onResumeChange(this.resume!)
   
 }
   /**
   * add new Education
   * @param Education 
   */
   editEducation(skill: Skill, index: number){
    this.skillForm = this.fb.group(skill);
    this.edit = true;
    this.indexToEdit = index;
  }

  onFocus(){
     this.opened = true;
  }

  onSelect(skill: string){
    this.skillForm?.get('name')?.setValue(skill);
    this.opened = false;
  }

  /**
   * add Skill 
   */
  addSkill():void {
    
      if(this.indexToEdit === undefined){
        if(this.resume?.skills?.findIndex(v => v?.name === this.skillForm?.get('name')?.value) === -1){
          this.resume?.skills?.push({...this.skillForm?.value});
        }
      }else{
        if (this.indexToEdit! >= 0 && this.indexToEdit! < this.resume!.skills!.length) {
          this.resume!.skills![this.indexToEdit!] = this.skillForm?.value;
        }
      }
     this.cvBuilderService.onResumeChange(this.resume!);
     this.edit = false;
     this.skillForm?.reset();
     this.indexToEdit = undefined;
     this.results = this.SKILLS;
     this.opened = false;
  }

  /**
   * remove Skill
   * @param index 
   */
  removeSkill(index: number): void{
   this.resume?.skills?.forEach((e, i) => {
      if(i === index){
        this.resume?.skills?.splice(i,1);
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

  search(event: any){
   this.results = this.SKILLS.filter((v: string) => v.toLowerCase().includes(event?.target?.value.toLowerCase()))
  }

}
