import { Component, OnInit } from '@angular/core';
import { DiffService } from "../shared/diff.service";
import { IDiffResult } from "../shared/diff-result.interface";

@Component({
  selector: 'diff-form',
  templateUrl: './diff-form.component.html',
  styleUrls: ['./diff-form.component.css'],
  providers: [DiffService]
})
export class DiffFormComponent implements OnInit {
  original: string = '';
  modified: string = '';
  originalFragment: string = 'original';
  modifiedFragment: string = 'modified';
  diffResult: IDiffResult[] = [];

  constructor(private diffService: DiffService) {
  }

  ngOnInit() {
  }

  compare() {
    const original = this.diffService.splitStringToArray(this.original);
    const modified = this.diffService.splitStringToArray(this.modified);
    this.diffResult = this.diffService.findDiff(original, modified);
  }

  get isCompareDisabled() {
    return !this.original || !this.modified;
  }
}
