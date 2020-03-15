import { Component, OnInit } from '@angular/core';
import { DopplerService } from '../doppler.service';

@Component({
    selector: 'app-sliderbar',
    templateUrl: './scalebar.component.html',
    styleUrls: ['./scalebar.component.scss']
})
export class SliderComponent implements OnInit {

    velocity: number;

    constructor(private dopplerService: DopplerService) {
        dopplerService.velocity$.subscribe(res => {
            res ? this.velocity = res : this.velocity = 0
        });
    }

    ngOnInit(): void {

    }

    updateVelocity($event) {
        this.velocity = $event.value;
        this.dopplerService.updateVelocity(this.velocity);
    }

}