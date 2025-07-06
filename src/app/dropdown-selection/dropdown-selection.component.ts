import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {forkJoin} from "rxjs";

@Component({
  selector: 'app-dropdown-selection',
  templateUrl: './dropdown-selection.component.html',
  styleUrls: ['./dropdown-selection.component.css']
})
export class DropdownSelectionComponent {
  evenement: any;
  choices: any;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    forkJoin({
      choices: this.httpClient.get('http://localhost:3000/choices'),
      evenement: this.httpClient.get('http://localhost:3000/events/1')
    }).subscribe(({ choices, evenement }: any) => {
      this.choices = choices;
      evenement.participation = evenement.participations[0];
      this.evenement = evenement;
    });
  }

  onParticipationChange(event: any) {
    console.log('Participation changed:', event);
    console.log(this.evenement)
  }
}
