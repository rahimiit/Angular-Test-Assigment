// data.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

//import { DataService } from '../Service/data.service';
import { DataItem } from '../data-item.model';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  data: DataItem[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
 
    this.dataService.getData().subscribe(
      (data: DataItem[]) => {
        this.data = data;
      
        console.log(data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
