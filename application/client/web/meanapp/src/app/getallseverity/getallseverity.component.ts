import { Component, OnInit, ViewChild } from '@angular/core';
import { GetallseverityService } from './getallseverity.service';
import { Router } from '@angular/router';





@Component({
  selector: 'app-getallseverity',
  templateUrl: './getallseverity.component.html',
  styleUrls: ['./getallseverity.component.scss'],
})

export class GetallseverityComponent implements OnInit {
    columnDefs: any = [{ headerName: 'name', field: 'name'  },{ headerName: 'description', field: 'description'  },];
    public severity:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        description: '',
    }
    gridApi: any;
 	gridColumnApi: any;
 	rowSelection: "single" | "multiple" | undefined = 'single';
 	defaultColDef = { editable: false, sortable: true, resizable: true, filter: true };
 	paginationPageSize = 10;
 	rowData: any[] = [];
 	rowIndex: Number = 0;




    constructor (
        private getallseverityService: GetallseverityService,
        private router: Router,
    ) { }

    ngOnInit() {
        this.severity.created_by = sessionStorage.getItem('email') || ''; 
        


    
    }
    GetAllValues() {
        this.getallseverityService.GetAllValues().subscribe((data:any) => {
            this.rowData = data;
 	 	console.log(data);
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    Route(queryId:any) {
        this.router.navigate(['./updateseverirty'], { queryParams: { 'id': queryId } })
    }
    onSelectionChanged(event:any) {
        const selectedRows = this.gridApi.getSelectedRows();
 	 	this.Route(selectedRows[0]._id);
    }
    onGridReady(params:any) {
        this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.gridColumnApi = params.columnApi;
    }


}