import { Component } from '@angular/core';
import { HeaderLandingPageComponent } from '../header-landing-page/header-landing-page.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-landing-page-inicio',
  standalone: true,
  imports: [HeaderLandingPageComponent, FooterComponent],
  templateUrl: './landing-page-inicio.component.html',
  styleUrl: './landing-page-inicio.component.css'
})
export class LandingPageInicioComponent {

}
