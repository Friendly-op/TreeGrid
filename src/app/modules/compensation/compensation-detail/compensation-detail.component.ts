import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  Freeze,
  Freeze,
  PageSettingsModel,
  SortSettingsModel,
  TreeGrid,
  TreeGrid,
  TreeVirtual,
  VirtualScroll,
} from '@syncfusion/ej2-angular-treegrid';
// import { data } from '../models/data';
import { sampleData } from '../models/dataGridText';
import { allData } from '../models/allData';
TreeGrid.Inject(Freeze);


TreeGrid.Inject(Freeze)
@Component({
  selector: 'app-compensation-detail',
  templateUrl: './compensation-detail.component.html',
  styleUrl: './compensation-detail.component.scss'
  encapsulation: ViewEncapsulation.None,
})

export class CompensationDetailComponent {
  @ViewChild('gridTree', { static: true })
  public gridtree: any;
  public data?: Object[];
  public filterSettings = { type: 'Excel' };
  public sortSettings?: SortSettingsModel;
  public pageSettings?: PageSettingsModel;
  public contextMenuItems?: Object[];
  public datamock: string[] = ['A+', 'A', 'B', 'C', 'D'];
  public wrapSettings: any = { wrapMode: 'Header' };
  public columnFilterSettings?: Object;
  public template?: string;
  ngOnInit(): void {
    this.data = allData;
    this.sortSettings = {
      columns: [
        { field: 'GradingGroupName', direction: 'Ascending' },
        { field: 'SubGradingGroupName', direction: 'Descending' },
      ],
    };
    this.pageSettings = { pageSize: 6 };
  }
}
