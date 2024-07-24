import { Component } from '@angular/core';
import {
  Freeze,
  PageSettingsModel,
  SortSettingsModel,
  TreeGrid,
} from '@syncfusion/ej2-angular-treegrid';
import { data } from '../models/data';
import { sampleData } from '../models/dataGridText';


TreeGrid.Inject(Freeze)
@Component({
  selector: 'app-compensation-detail',
  templateUrl: './compensation-detail.component.html',
  styleUrl: './compensation-detail.component.scss'
})

export class CompensationDetailComponent {
  public data?: Object[];
  public sortSettings?: SortSettingsModel;
  public pageSettings?: PageSettingsModel;
  public contextMenuItems?: Object[];

  ngOnInit(): void {
    this.data = sampleData;
    this.sortSettings = {
      columns: [
        { field: 'GradingGroupName', direction: 'Ascending' },
        { field: 'SubGradingGroupName', direction: 'Descending' },
      ],
    };
    this.pageSettings = { pageSize: 6 };
  }

  public PersonPicture: any = [
    { id: 1, name: 'John', imagePath: 'assets/image/mail1.png' },
    { id: 2, name: 'Smith', imagePath: 'assets/image/mail2.png' }
  ];

  public datagrade: any = [
    { id: 1,  newgrade: 'A+' },
    { id: 2,  newgrade: 'A' },
    { id: 2,  newgrade: 'B' },
    { id: 2,  newgrade: 'C' },
    { id: 2,  newgrade: 'D' },
    
  ];

  public newgradeData: Object[] = [
    { newgrade: 'A+' },
    { newgrade: 'A' },
    { newgrade: 'B' },
    { newgrade: 'C' },
    { newgrade: 'D' }
  ];

  public fields: Object = { text: 'newgrade', value: 'newgrade' };
}
