import { Component, Input, OnInit } from '@angular/core';
import { IDiffResult } from "../";

@Component({
  selector: 'diff-result',
  templateUrl: './diff-result.component.html',
  styleUrls: ['./diff-result.component.css']
})
export class DiffResultComponent implements OnInit {
  @Input() result: IDiffResult[];

  constructor() {
  }

  ngOnInit() {
  }

}
