import { Component } from '@angular/core';
import { SteComponentComponent } from './ste-component/ste-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'es1angular';
  saluto = 'Ciao Cama';
  saluti = ['Ciao Cama', 'Ciao Ste', 'Ciao Panariello', 'Ciao Pagh', 'Ciao BigRom'];

  pagh = 'Mi chiamo Pagh';
}
