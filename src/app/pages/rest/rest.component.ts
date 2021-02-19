import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit, AfterViewInit {
  // @ViewChild('editor') editor;
  method = 'GET';
  path = '';
  public content = `{
    "accessId": "risk-rmp.admin",
    "accessKey": "6F3DYHErIduZTKPU",
    "desc": "内控工作台",
    "operators": [
      "WB735784",
      "WB318191"
    ],
    "categoryTemplateMap": {
      "行业白名单删除流程的跟进通知": "5ZraIncBPAn0hQquK619"
    }
  }`;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // this.editor.setFontSize('10px');
    // this.editor.setTheme('ace/theme/cerebro');
    // this.editor.getSession().setMode('ace/mode/json');
    // this.editor.setOptions({
    //   fontFamily: 'Monaco, Menlo, Consolas, "Courier New", monospace',
    //   fontSize: '12px',
    //   fontWeight: '400',
    // });
  }

  execute(): void {
    console.log(this.method);
  }

  log(event: any, txt: any): void {
    // console.log('ace event', event);
    // document.querySelector('#log').value += `${txt}\n`;
  }
}
