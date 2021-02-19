import {Component, OnInit} from '@angular/core';
import {AceConfigInterface} from 'ngx-ace-wrapper/lib/ace.interfaces';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {
  options: AceConfigInterface = {
    mode: 'json',
    fontSize: '14px',
    theme: 'chaos',
    cursorStyle: 'ace',
    useSoftTabs: true,
    tabSize: 2,
  };
  content = '{}';

  method = 'GET';
  path = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  execute(): void {
    console.log(this.method);
    console.log(this.content);
    console.log(this.path);
  }

  /**
   * 格式化json
   */
  format(): void {
    this.content = JSON.stringify(JSON.parse(this.content), null, 2);
  }
}
