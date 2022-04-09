import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SearchFormComponent } from '@components/search-form/search-form.component';

@NgModule({
  declarations: [SearchFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [SearchFormComponent]
})
export class SearchFormModule { }