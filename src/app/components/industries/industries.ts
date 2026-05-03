import { Component } from '@angular/core';

interface Industry {
  name: string;
  desc: string;
  features: string[];
  img: string;
}

@Component({
  selector: 'app-industries',
  imports: [],
  templateUrl: './industries.html',
  styleUrl: './industries.css',
})
export class Industries {
  industries: Industry[] = [
    {
      name: 'Railways',
      desc: 'Motor repair and rewinding solutions for traction and railway applications, ensuring reliable and continuous operation.',
      features: ['Traction motor repair', 'High-load performance', 'Continuous operation support'],
      img: '/images/service_rewinding.png'
    },
    {
      name: 'Thermal Power Plants',
      desc: 'High-capacity motor repair and maintenance solutions for power plants, ensuring reliable performance in critical operations.',
      features: ['High-capacity motor handling', 'Reliable plant operation', 'Critical system support'],
      img: '/images/hero_bg.png'
    },
    {
      name: 'Steel Industry',
      desc: 'Heavy-duty motor repair and overhauling for steel plants, supporting continuous production and high-load operations.',
      features: ['Heavy-duty motor repair', 'High-temperature operation', 'Reduced downtime'],
      img: '/images/cta_bg.png'
    },
    {
      name: 'Cement Industry',
      desc: 'Reliable motor repair solutions for cement plants, ensuring performance in heavy-load and dusty environments.',
      features: ['Heavy-load applications', 'Dust-resistant performance', 'Continuous production support'],
      img: '/images/services_bg.png'
    },
    {
      name: 'Mining Industry',
      desc: 'Robust motor repair and maintenance solutions for mining operations, designed for harsh and demanding conditions.',
      features: ['Rugged environment support', 'Heavy-duty motor handling', 'Reliable performance'],
      img: '/images/service_overhauling.png'
    }
  ];

  activeIndex = 0;

  setActive(i: number) {
    this.activeIndex = i;
  }

  get active(): Industry {
    return this.industries[this.activeIndex];
  }
}
