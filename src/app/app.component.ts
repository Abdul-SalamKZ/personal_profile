import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from "./shared/sidebar/sidebar.component";
import { AboutComponent } from "./shared/about/about.component";
import { IntroductionComponent } from "./shared/introduction/introduction.component";
import { ResumeComponent } from "./shared/resume/resume.component";
import { ServicesComponent } from "./shared/services/services.component";
import { SkillsComponent } from './shared/skills/skills.component';
import { PortfolioComponent } from './shared/portfolio/portfolio.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HomeComponent, SidebarComponent ,AboutComponent , IntroductionComponent , ResumeComponent , ServicesComponent ,SkillsComponent , PortfolioComponent]
})
export class AppComponent {
  title = 'persnal_profile';
}
