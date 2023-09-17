import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CvBuilderService } from 'src/app/core/services/cv-builder.service';
import { Header } from 'src/app/models/header.model';
import { Resume } from 'src/app/models/resume.model';

@Component({
  selector: 'app-header-form',
  templateUrl: './header-form.component.html',
  styleUrls: ['./header-form.component.scss']
})
export class HeaderFormComponent implements OnInit {
  @Input() public resume?: Resume;

 
  public imageURL = '';
  public headerForm?: FormGroup;
  constructor(public fb: FormBuilder, private cvbuilderService: CvBuilderService) {  }

  ngOnInit(): void {
    // Reactive Form
    this.headerForm = this.fb.group({
      jobTitle: [this.resume?.header?.jobTitle, Validators.required],
      avatar:    [null, Validators.required],
      firstName: [this.resume?.header?.firstName, Validators.required],
      lastName:  [this.resume?.header?.lastName, Validators.required],
      country:   [this.resume?.header?.country, Validators.required],
      city:      [this.resume?.header?.city, Validators.required],
      postal:    [this.resume?.header?.postal],
      phone:     [this.resume?.header?.phone, Validators.required],
      email:     [this.resume?.header?.email, Validators.required]
    })
    this.imageURL = this.resume?.header?.avatar??"";

    this.headerForm?.valueChanges.subscribe(v => {
    this.resume!.header = this.headerForm!.value;
    this.cvbuilderService.onResumeChange(this.resume!);
    })

  }


  /**
   * 
   * @param event 
   */
  showPreview(event: any) {
    const file = (event.target as HTMLInputElement).files![0];
    this.headerForm?.patchValue({
      avatar: file
    });
    this.headerForm?.get('avatar')?.updateValueAndValidity()
    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(file)
  }

  saveForm(): void {
    console.log(this.headerForm?.value)
  }
}
