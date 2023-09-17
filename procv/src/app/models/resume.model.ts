import { OnInit } from "@angular/core";
import { Education } from "./education.model";
import { Experience } from "./experience.model";
import { Header } from "./header.model";

export interface Resume {
    header?: Header;
    experiences?: Experience [];
    educations?: Education   [];



}