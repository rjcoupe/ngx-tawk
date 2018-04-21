import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-tawk',
  templateUrl: './app.component.html'
})
export class NgxTawkComponent {
  @Input() id: string;
}
