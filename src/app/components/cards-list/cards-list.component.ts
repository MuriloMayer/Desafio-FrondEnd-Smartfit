import { Component, Input, OnInit } from '@angular/core';
import { GetUnitsService } from 'src/app/services/get-units.service';
import { Locations } from 'src/app/types/locations.interface';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {
  @Input() unitsList: Locations[] = []

  constructor() { }

  ngOnInit(): void {
    console.log(this.unitsList)
  }

}
