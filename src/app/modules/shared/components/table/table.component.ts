import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<T> {
  @Input() data: T[] = [];
  @Input() columns: Array<keyof T> = [];
  @Input() routerLinkEnable: boolean = false;
}