import { Component, signal } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  templateUrl: './header.component.html',
  styles: ``,
})
export class HeaderComponent {
  title = signal('Ecommerce App');
  handleClick() {
    console.log('button is clicked');
  }
}
