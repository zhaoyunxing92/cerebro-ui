import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Constant} from '../../domain/constant';
import {CatService} from '../../services/cat.service';
import {ClusterService} from '../../services/cluster.service';
import {Cluster} from '../../domain';
import {HostService} from '../../services/host.service';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {

  hosts: string[] = [
    'http://localhost:9200',
    'http://bsearch-gateway.alibaba-inc.com',
    'http://bteye.esdb.dbfree.tbsite.net:9200',
  ];

  connecting: boolean;
  feedback: string;
  form: FormGroup;

  constructor(private hostService: HostService, private catService: CatService, private router: Router) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      host: new FormControl(null, [Validators.required]),
    });
  }

  /**
   * health
   * @param host es地址
   */
  connect(host: string): void {
    this.form.get('host').setValue(host);
    this.hostService.setHost(host);
    this.connecting = true;
    this.catService.health(host).subscribe((cluster: Cluster) => {
      cluster.shards = 0;
      cluster.host = host;
      cluster.docs = 0;
      cluster.indices = 0;
      this.connecting = false;
      sessionStorage.setItem(Constant.healthStorageKey, JSON.stringify(cluster));
      sessionStorage.setItem(Constant.hostKey, host);
      this.router.navigate(['/dashboard/overview']).then(_ => {
      });
    });
  }
}
