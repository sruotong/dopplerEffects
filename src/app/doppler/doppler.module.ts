
import { DopplerComponent } from './doppler.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DopplerRoute } from './doppler.route';
import { InputboxComponent } from './inputbox/inputbox.component';
import { FormsModule } from '@angular/forms';
import { DopplerService } from './doppler.service';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './scalebar/scalebar.component';
import { MatSliderModule } from '@angular/material/slider';
const ENTITY_STATES = [...DopplerRoute];

@NgModule({
    declarations: [
        DopplerComponent,
        InputboxComponent,
        SliderComponent
    ],
    imports: [
        MatSliderModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    providers: [],
    exports: [DopplerComponent],
    bootstrap: [DopplerComponent]
  })
  export class DopplerModule { }