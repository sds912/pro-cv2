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
 public selectedTheme: any = {
  name: "theme 1",
  colors: {
  primary: "#533B4D",
  secondary: "#F564A9",
  muted: "#FAA4BD"
  }
}

 constructor(private cvBuilderService: CvBuilderService){
    this.cvBuilderService.resume?.subscribe(res => {
      this.resume = res;
      this.selectedTheme = res?.theme;
    });
 }

 ngOnInit(): void {
   this.colors = COLORS;
   this.onThemeChange()
 }
 get COLORS (){
  return COLORS;
 }

 onThemeChange(theme?: PalletColor){
  if(theme !== undefined){
    this.resume!.theme = theme;
    this.cvBuilderService.onResumeChange(this.resume!);
  }
 
 }


}
