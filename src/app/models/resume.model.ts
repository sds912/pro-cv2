import { OnInit } from "@angular/core";
import { Education } from "./education.model";
import { Experience } from "./experience.model";
import { Header } from "./header.model";

export interface Resume {
    header?: Header;
    experiences?: Experience [];
    educations?: Education   [];
    skills?: Skill[];
    languages?: Lang[];
    step: number;
    theme?: PalletColor;
}


export interface Skill {
  name?: string;
  level?: number;
}

export interface Lang {
    name?: string;
    level?: number;
}

export interface PalletColor {
  name: string;
  colors: Color
}

export interface Color{
  primary: string;
  secondary: String;
  muted: string;
}