import { Component } from '@angular/core';

interface Project {
  title: string;
  desc: string;
  tag: string;
  img: string;
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projects: Project[] = [
    {
      title: 'HT Motor Rewinding',
      desc: 'Rewinding and repair of high-capacity HT motor for industrial application with complete testing and performance restoration.',
      tag: 'Heavy-duty industrial motor',
      img: '/images/service_rewinding.png'
    },
    {
      title: 'Precision CNC milling for automotive components',
      desc: 'Improved machining process to achieve tighter tolerances and faster production cycles for car parts.',
      tag: 'Engine components',
      img: '/images/service_overhauling.png'
    },
    {
      title: 'Additive manufacturing for custom tooling',
      desc: 'Implemented 3D-printed tools to accelerate prototyping and reduce lead time in production.',
      tag: 'Traditional tooling',
      img: '/images/services_bg.png'
    },
    {
      title: 'Automated assembly line optimization',
      desc: 'Streamlined assembly processes with robotics, reducing labor costs and improving output consistency.',
      tag: 'Assembly process',
      img: '/images/hero_bg.png'
    }
  ];

  activeIndex = 0;

  prev() {
    this.activeIndex = (this.activeIndex - 1 + this.projects.length) % this.projects.length;
  }

  next() {
    this.activeIndex = (this.activeIndex + 1) % this.projects.length;
  }

  get active(): Project {
    return this.projects[this.activeIndex];
  }
}
