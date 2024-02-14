import { Component, Input, OnInit } from '@angular/core';
import { Locations } from 'src/app/types/locations.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card!: Locations ;

  constructor() { }

  ngOnInit(): void {
  }

}
