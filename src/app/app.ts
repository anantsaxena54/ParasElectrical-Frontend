import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Services } from './components/services/services';
import { Industries } from './components/industries/industries';
import { Footer } from './components/footer/footer';
import { FounderQuote } from './components/founder-quote/founder-quote';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, FounderQuote, About, Services, Industries, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
