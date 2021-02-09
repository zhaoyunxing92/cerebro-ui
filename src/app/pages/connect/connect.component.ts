import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ConnectService} from '../../services/connect/connect.service';

import {Node} from '../../domain/node';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {

  hosts: string[] = [
    'http://bsearch-gateway.alibaba-inc.com',
    'http://bsearch-pre.esdb.dbfree.tbsite.net:9200',
    'http://bteye-flow.esdb.dbfree.tbsite.net:9200',
    'http://bteye-flow.esdb.dbfree.tbsite.net:9200',
    'http://bteye-flow.esdb.dbfree.tbsite.net:9200',
    'http://bteye-flow.esdb.dbfree.tbsite.net:9200',
    'http://bteye-flow.esdb.dbfree.tbsite.net:9200',
    'http://bteye-flow.esdb.dbfree.tbsite.net:9200',
    'http://bteye-flow.esdb.dbfree.tbsite.net:9200',
    'http://bteye-flow.esdb.dbfree.tbsite.net:9200',
    'http://bteye-flow.esdb.dbfree.tbsite.net:9200',
    'http://bteye-flow.esdb.dbfree.tbsite.net:9200',
    'http://bteye-flow.esdb.dbfree.tbsite.net:9200',
    'http://bteye-flow.esdb.dbfree.tbsite.net:9200',
    'http://bteye-flow.esdb.dbfree.tbsite.net:9200',
    'http://bteye-flow.esdb.dbfree.tbsite.net:9200',
    'http://bteye-flow.esdb.dbfree.tbsite.net:9200',
    'http://bteye-flow.esdb.dbfree.tbsite.net:9200',
    'http://bteye-flow.esdb.dbfree.tbsite.net:9200',
    'http://bteye-flow.esdb.dbfree.tbsite.net:9200',
    'http://bteye-flow.esdb.dbfree.tbsite.net:9200',
    'http://bteye-flow.esdb.dbfree.tbsite.net:9200',
    'http://bteye-flow.esdb.dbfree.tbsite.net:9200',
    'http://bteye-flow.esdb.dbfree.tbsite.net:9200',
    'http://bteye.esdb.dbfree.tbsite.net:9200',
  ];
  connecting: boolean;
  feedback: string;
  form: FormGroup;

  node: Node;

  constructor(private connectService: ConnectService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      host: new FormControl(null, [Validators.required]),
    });
  }

  connect(host: string): void {
    this.form.get('host').setValue(host);
    this.connecting = true;
    this.connectService.connect(host).subscribe(node => console.log(node));
  }
}
