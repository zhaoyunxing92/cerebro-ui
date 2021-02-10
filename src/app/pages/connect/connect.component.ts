import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CatService} from '../../services/cat.service';

import {ClusterHealth} from '../../domain/cluster/health';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {

  hosts: string[] = [
    'http://bsearch-gateway.alibaba-inc.com',
    'http://bteye.esdb.dbfree.tbsite.net:9200',
  ];
  connecting: boolean;
  feedback: string;
  form: FormGroup;
  private clusterHealth: ClusterHealth;

  constructor(private catService: CatService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      host: new FormControl(null, [Validators.required]),
    });
  }

  connect(host: string): void {
    this.form.get('host').setValue(host);
    this.connecting = true;
    this.catService.health(host).subscribe(health => {
      console.log(health);
      this.clusterHealth = health;
      this.connecting = false;
    });
  }
}
