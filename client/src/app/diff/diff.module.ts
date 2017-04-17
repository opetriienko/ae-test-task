import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FileSelectDirective } from 'ng2-file-upload';

import {
  DiffService,
  DiffFormComponent,
  DiffFragmentComponent,
  DiffResultComponent
} from "./";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [DiffFormComponent],
  declarations: [
    DiffFormComponent,
    DiffFragmentComponent,
    DiffResultComponent,
    FileSelectDirective
  ],
  providers: [DiffService]
})
export class DiffModule {
}
