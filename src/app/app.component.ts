import {Component, ElementRef} from '@angular/core';
import {CellClassParams, ColDef, GridApi} from 'ag-grid-community';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface User {
  id: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public defaultColDef: ColDef = {
    width: 200
  };

  public rowData$: Observable<{data: User[]}> | undefined;
  public gridApi: GridApi | undefined;
  public columnDefs: ColDef[] | undefined;

  constructor(private http: HttpClient,
              private elementRef: ElementRef) {}

  onGridReady() {
    this.columnDefs = this.configColumns();
    this.rowData$ =  this.getUserList();
  }

  private configColumns () {
    return [
      {
        headerName: 'User Information',
        children: [
          {
            headerName: 'Id',
            field: 'id',
            width: 50
          },
          {
            headerName: 'First Name',
            field: 'first_name',
          },
          {
            headerName: 'Last Name',
            field: 'last_name'
          },
          {
            headerName: 'Image',
            field: 'avatar',
            width: 80,
            cellRenderer: (params:CellClassParams) => {
              return `<img  width="50px" height="50px" src="${params.value}">`;
            }
          }
        ]
      }
    ];
  }

  private getUserList(): Observable<{ data: User[] } | any> {
    return this.http.get('https://reqres.in/api/users?page');
  }

  changeHeaderColor() {
    this.elementRef.nativeElement.querySelector('.ag-header').style.setProperty('--background-color', 'green');
  }
}
