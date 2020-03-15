import { Component, OnInit } from '@angular/core';
import { DopplerService } from './doppler.service';

@Component({
  selector: 'app-doppler',
  templateUrl: './doppler.component.html',
  styleUrls: ['./doppler.component.scss'],
  providers: [DopplerService]
})
export class DopplerComponent implements OnInit {

  //asume default light speed is 300000 mk/s
  lightSpeed: number = 300000;
  //asume default yellow color wavelength is 580
  //when velocity the original color of the star is yellow
  yellowWavelength: number = 580;

  velocity: number;
  velocityScale: number;
  color: string;
  constructor(
    private dopplerService: DopplerService
  ) {
    dopplerService.velocityInRange$.subscribe(res => {
      this.velocity = res;
      if (this.velocity > 0 && this.velocity <= 100) {
        this.velocityScale = this.normalScale();
      } else if (this.velocity < 0 && this.velocity >= -100) {
        this.velocityScale = this.exponentialScale();
      } else {
        this.velocityScale = 0;
      }
      this.updateColor();
    });
  }

  ngOnInit(): void {
    this.color = 'transparent';
  }

  exponentialScale() {
    let minp = 0;
    let maxp = 100;
    let minv = Math.log(1000);
    let maxv = Math.log(130000);
    let scale = (maxv - minv) / (maxp - minp);
    return -Math.exp(minv + scale * (-this.velocity - minp));
  }

  normalScale() {
    return this.velocity * 600;
  }

  updateColor() {
    if (this.velocity == 0) {
      this.color = 'transparent';
    } else {
      let wavelength = Math.round(this.yellowWavelength * this.lightSpeed / (this.lightSpeed - this.velocityScale));
      let red, green, blue, factor;
      const gamma = 0.8;
      const intensity_max = 255;

      if ((380 <= wavelength) && (wavelength <= 439)) {
        red = -(wavelength - 440) / (440 - 380);
        green = 0;
        blue = 1;
      }
      else if ((440 <= wavelength) && (wavelength <= 489)) {
        red = 0;
        green = (wavelength - 440) / (490 - 440);
        blue = 1;
      }
      else if ((490 <= wavelength) && (wavelength <= 509)) {
        red = 0;
        green = 1;
        blue = -(wavelength - 510) / (510 - 490);
      }
      else if ((510 <= wavelength) && (wavelength <= 579)) {
        red = (wavelength - 510) / (580 - 510);
        green = 1;
        blue = 0;
      }
      else if ((580 <= wavelength) && (wavelength <= 644)) {
        red = 1;
        green = -(wavelength - 645) / (645 - 580);
        blue = 0;
      }
      else if ((645 <= wavelength) && (wavelength <= 725)) {
        red = 1;
        green = 0;
        blue = 0;
      }

      if ((380 <= wavelength) && (wavelength <= 419)) {
        factor = 0.3 + 0.7 * (wavelength - 380) / (420 - 380);
      } else if ((420 <= wavelength) && (wavelength <= 644)) {
        factor = 1;
      } else if ((645 <= wavelength) && (wavelength <= 725)) {
        factor = 0.3 + 0.7 * (725 - wavelength) / (725 - 700);
      } else {
        factor = 0;
      }

      red = red == 0 ? red : Math.round(intensity_max * Math.pow(red * factor, gamma));
      green = green == 0 ? green : Math.round(intensity_max * Math.pow(green * factor, gamma));
      blue = blue == 0 ? blue : Math.round(intensity_max * Math.pow(blue * factor, gamma));
      this.color = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
      console.log(this.color, wavelength);
    }
  }
}
