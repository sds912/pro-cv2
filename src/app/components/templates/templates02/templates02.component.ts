import { Component } from '@angular/core';
import { CvBuilderService } from 'src/app/core/services/cv-builder.service';
import { Resume } from 'src/app/models/resume.model';

@Component({
  selector: 'app-templates02',
  templateUrl: './templates02.component.html',
  styleUrls: ['./templates02.component.scss']
})
export class Templates02Component {

  public resume?: Resume;
  constructor(private cvbuilderService: CvBuilderService){
     cvbuilderService.resume!.subscribe(resume => {this.resume = resume})
  }

}
