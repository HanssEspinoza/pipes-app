import { Component } from '@angular/core';

import { PanelModule } from 'primeng/panel';

import { ToggleCasePipe } from '../pipes';

@Component({
  selector: 'app-other-page',
  standalone: true,
  imports: [PanelModule, ToggleCasePipe],
  template: `
    <p-panel header="Pipes personalizados" class="p-1">
      <p>Pipes personalizados - creados por {{'nosotros' | toggleCase}}</p>
    </p-panel>
  `,
  styles: ``,
})
export class OtherPageComponent {}
