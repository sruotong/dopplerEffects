import { Component, OnInit } from '@angular/core';
import { DopplerService } from '../doppler.service';

@Component({
    selector: 'app-inputbox',
    templateUrl: './inputbox.component.html',
    styleUrls: ['./inputbox.component.scss']
})
export class InputboxComponent implements OnInit {

    velocity: number;

    constructor(private dopplerService: DopplerService) {
        dopplerService.velocity$.subscribe(res => {
            res ? this.velocity = res : this.velocity = 0
        });
    }

    ngOnInit(): void {

    }

    updateVelocity() {
        this.dopplerService.updateVelocity(this.velocity);
    }

}
