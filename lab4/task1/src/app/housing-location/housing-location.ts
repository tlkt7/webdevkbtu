import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HousingLocation as HousingLocationInterface } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  imports: [RouterModule],
  templateUrl: './housing-location.html',
  styleUrl: './housing-location.css',
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocationInterface;
}
