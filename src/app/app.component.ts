import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public selectedFeature = 'recipe'

  onNavigate(selection: string) {
    this.selectedFeature = selection
  }
}
