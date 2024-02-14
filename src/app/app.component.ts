import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Locations } from './types/locations.interface';
import { GetUnitsService } from './services/get-units.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showList = new BehaviorSubject(false);
  unitsLists: Locations[] = []

  constructor(private unitService: GetUnitsService) {}

  onSubmit() {
    this.showList.next(true)

    this.unitsLists = this.unitService.getAllFilteredUnits();
  }
}
