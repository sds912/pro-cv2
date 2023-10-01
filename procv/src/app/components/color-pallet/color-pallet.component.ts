import { Component, OnInit } from '@angular/core';
import { COLORS } from 'src/app-constant';
import { CvBuilderService } from 'src/app/core/services/cv-builder.service';
import { PalletColor, Resume } from 'src/app/models/resume.model';

@Component({
  selector: 'app-color-pallet',
  templateUrl: './color-pallet.component.html',
  styleUrls: ['./color-pallet.component.scss']
})
export class ColorPalletComponent  implements OnInit{
public resume?: Resume;
 public colors: any[] = [];

 constructor(private cvBuilderService: CvBuilderService){
    this.cvBuilderService.resume?.subscribe(res => this.resume = res);
 }

 ngOnInit(): void {
   this.colors = COLORS;
 }
 get COLORS (){
  return COLORS;
 }

 onThemeChange(theme: PalletColor){
  this.resume!.theme = theme;
  console.log(theme)
  this.cvBuilderService.onResumeChange(this.resume!)
 }


}
