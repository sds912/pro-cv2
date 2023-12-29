import { Component, ElementRef, ViewChild } from '@angular/core';
import { CvBuilderService } from 'src/app/core/services/cv-builder.service';
import { Resume } from 'src/app/models/resume.model';


@Component({
  selector: 'app-templates01',
  templateUrl: './templates01.component.html',
  styleUrls: ['./templates01.component.scss']
})
export class Templates01Component {
  @ViewChild('content') content!: ElementRef;

  public resume?: Resume;
  constructor(private cvbuilderService: CvBuilderService){
     cvbuilderService.resume!.subscribe(resume => {this.resume = resume})
  }


 
}
