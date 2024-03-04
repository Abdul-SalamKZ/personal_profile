import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from "./shared/sidebar/sidebar.component";
import { AboutComponent } from "./shared/about/about.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HomeComponent, SidebarComponent ,AboutComponent ]
})
export class AppComponent {
  title = 'persnal_profile';
}
