import {Component, OnInit} from '@angular/core';
import {AceConfigInterface} from 'ngx-ace-wrapper/lib/ace.interfaces';
import {ClientService} from '../../services/elasticsearch';


@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {
  argsOptions: AceConfigInterface = {
    mode: 'json',
    fontSize: '14px',
    theme: 'chaos',
    cursorStyle: 'ace',
    useSoftTabs: true,
    tabSize: 2,
  };
  resultOptions: AceConfigInterface = {
    readOnly: true,
    mode: 'json',
    fontSize: '14px',
    theme: 'chaos',
    cursorStyle: 'ace',
    useSoftTabs: true,
    tabSize: 2,
  };
  // 请求参数
  args = '{\n' +
    '  "query": {\n' +
    '    "term": {\n' +
    '      "user": {\n' +
    '        "value": "eddie"\n' +
    '      }\n' +
    '    }\n' +
    '  }\n' +
    '}';
  // 响应结果
  result = '';
  // 请求方法
  method = 'GET';
  path = 'kibana_sample_data_ecommerce/_search';

  constructor(private client: ClientService) {
  }

  ngOnInit(): void {
  }

  execute(): void {
    if (!this.path.startsWith('/')) {
      this.path = '/' + this.path;
    }
    //
    if (this.path.endsWith('_search')) {
      this.method = 'POST';
    }
    this.result = '';
    this.client.execute(this.path, this.method, this.args).subscribe(res => {
      this.result = JSON.stringify(res, null, 2);
    });
  }

  /**
   * 格式化json
   */
  format(): void {
    this.args = JSON.stringify(JSON.parse(this.args), null, 2);
  }
}
