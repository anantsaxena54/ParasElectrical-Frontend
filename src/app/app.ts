import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Services } from './components/services/services';
import { Capabilities } from './components/capabilities/capabilities';
import { Industries } from './components/industries/industries';
import { Projects } from './components/projects/projects';
import { Clients } from './components/clients/clients';
import { Footer } from './components/footer/footer';
import { FounderQuote } from './components/founder-quote/founder-quote';
import { MotorCta } from './components/motor-cta/motor-cta';
import { TrustedBanner } from './components/trusted-banner/trusted-banner';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, FounderQuote, About, Services, Capabilities, Industries, Projects, Clients, MotorCta, TrustedBanner, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
