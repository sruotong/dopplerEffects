import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeRoute } from './home.route';
import { HomeComponent } from './home.component';

const ENTITY_STATES = [...HomeRoute];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule.forChild(ENTITY_STATES)
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
