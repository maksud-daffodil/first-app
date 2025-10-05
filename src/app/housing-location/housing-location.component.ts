import {Component, inject, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousingLocation} from './housinglocation';
import {HousingService} from '../housing.service';

@Component({
  selector: 'app-housing-location',
  imports: [CommonModule],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.scss'
})
export class HousingLocationComponent {
  // bindings
  @Input() housingLocation!: HousingLocation;
}
