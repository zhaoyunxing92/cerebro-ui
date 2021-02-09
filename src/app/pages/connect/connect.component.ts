import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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

  constructor() {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      host: new FormControl(null, [Validators.required]),
    });
  }

  connect(host: string): void {
    this.form.get('host').setValue(host);
    this.connecting = true;
  }
}
