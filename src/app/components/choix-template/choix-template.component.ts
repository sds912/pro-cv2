import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CvBuilderService } from 'src/app/core/services/cv-builder.service';
import { Resume } from 'src/app/models/resume.model';

@Component({
  selector: 'app-choix-template',
  templateUrl: './choix-template.component.html',
  styleUrls: ['./choix-template.component.scss']
})
export class ChoixTemplateComponent {

  @Input() public resume?: Resume;

  public templates: any [] = [
     {
       id: 1,
       img: '../assets/template1.png',
       name: 'template0'
     },
     {
       id: 2,
       img: '../assets/template1.png',
       name: 'template1'
     },
     {
       id: 3,
       img: '../assets/template1.png',
       name: 'template2'
     }
   ]
 
   customOptions: OwlOptions = {
     loop: true,
     mouseDrag: false,
     touchDrag: false,
     pullDrag: false,
     dots: false,
     navSpeed: 700,
     navText: ['Prev', 'Nex'],
     margin: 8,
     autoplay: true,
     
     responsive: {
       0: {
         items: 1
       },
       400: {
         items: 2
       },
       740: {
         items: 3
       },
       940: {
         items: 4
       }
     },
     nav: true
   }
 

  constructor(private cvBuilderService: CvBuilderService){}


  onSelectTemplate(templateName: string){
     this.resume!.templateName = templateName;
     this.cvBuilderService.onResumeChange(this.resume!);
  }


}
