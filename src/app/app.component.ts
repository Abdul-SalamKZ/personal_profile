import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent as SidebarComponent } from "./shared/sidebar/sidebar.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, FooterComponent, HomeComponent, SidebarComponent]
})
export class AppComponent {
  title = 'persnal_profile';
}
