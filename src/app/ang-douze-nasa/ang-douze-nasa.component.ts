import { Component } from '@angular/core';
import { NasaService } from 'src/services/nasa.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-ang-douze-nasa',
  templateUrl: './ang-douze-nasa.component.html',
  styleUrls: ['./ang-douze-nasa.component.css'],
})
export class AngDouzeNasaComponent implements OnInit {
  title = 'Nasa';
  public imgOfTheDay: {} = {};

  constructor(public nasaService: NasaService) {}

  ngOnInit() {
    this.nasaService.getImageOfTheDay().subscribe((objectFromNasa) => {
      this.imgOfTheDay = objectFromNasa.hdurl;
    });
  }
}
