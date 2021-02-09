import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {
  api = '';

  apis: string[] = [
    'aliases',
    'allocation',
    'count',
    'fielddata',
    'health',
    'indices',
    'master',
    'nodeattrs',
    'nodes',
    'pending tasks',
    'plugins',
    'recovery',
    'repositories',
    'thread pool',
    'shards',
    'segments',
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  cat(): void {
    console.log(this.api);
  }

}
