import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNgComponentsModule } from '../../../shared/primeng-components';
import { MenuItem } from 'primeng/api';
import { Theme } from '../../services/theme-service/theme';

@Component({
  selector: 'app-default',
  imports: [RouterOutlet, PrimeNgComponentsModule],
  templateUrl: './default.html',
  styleUrl: './default.css',
})
export class Default implements OnInit {
  
  items!: MenuItem[] 

  constructor(
    private themeService: Theme
  ){}

  toggleDarkMode() {
    this.themeService.toggleDarkMode()
  }

  ngOnInit(): void {
    this.generateMenuItems()
  }

  generateMenuItems() {
    this.items = [
      { label: 'Criar Anúncio', icon: 'pi pi-plus' },
      { label: 'Meus Anúncios', icon: 'pi pi-book' },
      { label: 'Pagamentos', icon: 'pi pi-dollar' },
      { label: 'Dashboard', icon: 'pi pi-chart-pie' },
      { label: 'Contatos', icon: 'pi pi-users' },
      { label: 'Suporte', icon: 'pi pi-question-circle' }
    ]
  }
}
