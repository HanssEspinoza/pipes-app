import { Component, signal } from '@angular/core';

import { PanelModule } from 'primeng/panel';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { CanFlyPipe, SortByPipe, ToggleCasePipe } from '../pipes';
import { Color, Hero } from '../model';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-other-page',
  standalone: true,
  imports: [
    PanelModule,
    ToggleCasePipe,
    ToolbarModule,
    ButtonModule,
    TableModule,
    CanFlyPipe,
    TitleCasePipe,
    SortByPipe,
  ],
  template: `
    <p-panel header="Pipes personalizados" class="p-1">
      <p>
        Pipes personalizados - creados por
        {{ 'nosotros' | toggleCase : isUpperCase() }}
      </p>
    </p-panel>
    <p-toolbar>
      <div class="p-toolbar-group-start">
        <p-button
          label="ToggleCase"
          icon="pi pi-search"
          (click)="toggleUpperCase()"
        />
      </div>
      <div class="p-toolbar-group-end">
        <p-button
          class="mr-2"
          label="Por nombre"
          icon="pi pi-sort"
          styleClass="p-button-warning"
          (click)="changeOrder('name')"
        />
        <p-button
          class="mr-2"
          label="Por volar"
          icon="pi pi-sort"
          styleClass="p-button-danger"
          (click)="changeOrder('canFly')"
        />
        <p-button
          class="mr-2"
          label="Por color"
          icon="pi pi-sort"
          styleClass="p-button-info"
          (click)="changeOrder('color')"
        />
      </div>
    </p-toolbar>

    <div class="grid">
      <div class="col mt-2">
        <p-table [value]="heroes() | sortBy: orderBy()" [tableStyle]="{ 'min-width': '50rem' }">
          <ng-template pTemplate="header">
            <tr>
              <th>Name</th>
              <th>Vuela</th>
              <th>Color</th>
            </tr>
          </ng-template>
          <ng-template pTemplate="body" let-hero>
            <tr>
              <td>{{ hero.name }}</td>
              <td>{{ hero.canFly | canFly | titlecase }}</td>
              <td>{{ hero.color }}</td>
            </tr>
          </ng-template>
        </p-table>
      </div>
    </div>
  `,
  styles: ``,
})
export class OtherPageComponent {
  public isUpperCase = signal<boolean>(false);

  public orderBy = signal<keyof Hero | ''>('');

  public heroes = signal<Hero[]>([
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Flash',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Green Lantern',
      canFly: true,
      color: Color.green
    },
    {
      name: 'Green Arrow',
      canFly: false,
      color: Color.green
    },
  ])

  toggleUpperCase() {
    this.isUpperCase.update((isUpperCase) => !isUpperCase);
  }

  changeOrder(order: keyof Hero | '') {
    this.orderBy.set(order);
  }
}
