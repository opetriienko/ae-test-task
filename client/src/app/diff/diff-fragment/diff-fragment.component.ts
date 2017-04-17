import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'diff-fragment',
  templateUrl: './diff-fragment.component.html',
  styleUrls: ['./diff-fragment.component.css']
})
export class DiffFragmentComponent implements OnInit {
  @Input() fragmentName: string;

  constructor() {
  }

  ngOnInit() {
  }

}
