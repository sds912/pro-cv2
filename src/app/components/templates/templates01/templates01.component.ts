import { Component, ElementRef, ViewChild } from '@angular/core';
import { CvBuilderService } from 'src/app/core/services/cv-builder.service';
import { Resume } from 'src/app/models/resume.model';
declare var require: any;

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

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


  public exportPDF() {
    const pdfTable = this.content.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html, style:{
      backgroundColor: "red",
      
      template:{
        height: "560px",
        width: "470px",
        backgroundColor: "#FFFFFF",
       // box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    },
    side:{
        width: "160px",
        height: "560px",
        backgroundColor: "#212027"
    },
    profestion:{
        textAlign: "center",
        backgroundcolor: "#FFC400",
        textTransform: "uppercase"
       
    
    }}};

    pdfMake.createPdf(documentDefinition).download(); 
     
  }
}
