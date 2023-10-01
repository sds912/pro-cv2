import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CvBuilderService } from 'src/app/core/services/cv-builder.service';
import { Lang, Resume, Skill } from 'src/app/models/resume.model';

const LANGS: any[] = [
  {
  name: "Français",
  level: 0
},
{
  name: "Anglais",
  level: 0
},
{
  name: "Espangole",
  level: 0
},
{
  name: "Italien",
  level: 0
}
];

const LEVELS: number[] = [1,2,3,4,5,6,7,8,9,10];

@Component({
  selector: 'app-languages-form',
  templateUrl: './languages-form.component.html',
  styleUrls: ['./languages-form.component.scss']
})
export class LanguagesFormComponent {
  @Input() public resume?: Resume ;
  public edit = false;
  public langForm?: FormGroup;
  public indexToEdit?: number;
  public skillControl: FormControl = new FormControl(null, Validators.required);
  public opened = false;
  public results: string[] = [];
  constructor(private fb: FormBuilder, private cvBuilderService: CvBuilderService){

  }

  ngOnInit(): void {
    
    this.LANGS.map(lg =>{
      this.resume?.languages?.forEach(v => {
        if(v?.name?.toLowerCase().includes(lg?.name?.toLowerCase()!)){
          lg.level = v.level!
        }
      })
    } )
    
  }


 isSelected(lang: Lang): boolean{
  return this.resume?.languages?.findIndex(v => v?.name === lang?.name) !== -1;
 }


 get LANGS (){
  return LANGS;
 }

 get LEVELS (){
  return LEVELS;
 }
  

 onChange(event: any, lg:Lang){
  this.resume?.languages?.forEach(v => {
    if(v?.name?.toLowerCase().includes(lg?.name?.toLowerCase()!)){
      v.level = event?.target?.value;
    }
  })
  this.cvBuilderService.onResumeChange(this.resume!);
  this.LANGS.map(lg =>{
    this.resume?.languages?.forEach(v => {
      if(v?.name?.toLowerCase().includes(lg?.name?.toLowerCase()!)){
        lg.level = v.level!
      }
    })
  } )
  
 }

  /**
   * add Skill 
   */
  addLang(lang: Lang, index: any= undefined):void {
      if(!this.isSelected(lang)){
        this.resume?.languages?.push(lang);
      }else{
        if(index !== undefined){
         const results: any  = this.resume?.languages?.filter(v => v.name !== lang?.name);
         this.resume!.languages = results;
        }
      }

      this.cvBuilderService.onResumeChange(this.resume!);
  }

  /**
   * remove Lang
   * @param index 
   */
  removeLang(index: number): void{
   this.resume?.languages?.forEach((e, i) => {
      if(i === index){
        this.resume?.languages?.splice(i,1);
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

  download(){
    //ok
  }


}
