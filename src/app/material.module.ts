import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatToolbarModule, MatCardModule, MatProgressSpinnerModule, MatFormFieldModule, MatIconModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    MatButtonModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatIconModule
  ],
  declarations: []
})
export class MaterialModule { }
