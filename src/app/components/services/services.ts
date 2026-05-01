import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services implements AfterViewInit {
  @ViewChild('servicesContainer') servicesContainer!: ElementRef;

  ngAfterViewInit() {
    const options = {
      root: null,
      threshold: 0.15,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.05, // Lower threshold for more reliable triggering
      rootMargin: '50px' // Start animation slightly before it enters the viewport
    });

    // Observe elements and check initial state
    const elementsToObserve = this.servicesContainer.nativeElement.querySelectorAll('.reveal');
    elementsToObserve.forEach((el: HTMLElement) => {
      observer.observe(el);
      
      // Check if already in viewport (e.g., if page loaded at this hash)
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        el.classList.add('active');
      }
    });

    // Safety fallback: Reveal everything after a short delay if observer fails
    setTimeout(() => {
      elementsToObserve.forEach((el: HTMLElement) => {
        el.classList.add('active');
      });
    }, 1000);
  }
}
