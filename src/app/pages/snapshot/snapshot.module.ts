import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnapshotRoutingModule } from './snapshot-routing.module';
import { SnapshotComponent } from './snapshot.component';


@NgModule({
  declarations: [SnapshotComponent],
  imports: [
    CommonModule,
    SnapshotRoutingModule
  ]
})
export class SnapshotModule { }
