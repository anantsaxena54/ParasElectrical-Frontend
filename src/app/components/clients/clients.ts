import { Component } from '@angular/core';

interface ClientLogo {
  name: string;
  style?: 'plain' | 'badge' | 'mono' | 'script' | 'mark';
  color?: string;
  bg?: string;
  mark?: string;
}

@Component({
  selector: 'app-clients',
  imports: [],
  templateUrl: './clients.html',
  styleUrl: './clients.css'
})
export class Clients {
  clients: ClientLogo[] = [
    { name: 'Indian Railways', style: 'badge', color: '#ffffff', bg: '#c83713', mark: 'IR' },
    { name: 'NTPC', style: 'mono', color: '#0a3d91' },
    { name: 'BHEL', style: 'mono', color: '#d62828' },
    { name: 'SAIL', style: 'badge', color: '#ffffff', bg: '#1a8a3a', mark: 'SAIL' },
    { name: 'JSW Steel', style: 'script', color: '#0d47a1' },
    { name: 'UltraTech', style: 'mono', color: '#0a0a0a' },
    { name: 'Coal India', style: 'mark', color: '#0a0a0a', mark: 'CIL' },
    { name: 'Hindalco', style: 'plain', color: '#5a2a82' }
  ];
}
