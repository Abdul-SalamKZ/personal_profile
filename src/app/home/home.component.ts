import { Component } from '@angular/core';
import { VoidButtonComponent } from "../shared/void-button/void-button.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [VoidButtonComponent]
})
export class HomeComponent {

}
