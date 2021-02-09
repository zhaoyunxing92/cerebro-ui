import {Component} from '@angular/core';
import {Cerebro} from '../../domain/cerebro';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent {

  cerebro: Cerebro = {
    name: 'cerebro',
    version: '0.9.3',
    logo: 'assets/img/logo.png',
  };
}
