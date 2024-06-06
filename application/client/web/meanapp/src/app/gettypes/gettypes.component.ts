import { Component, OnInit, ViewChild } from '@angular/core';
import { GettypesService } from './gettypes.service';
import { Router } from '@angular/router';





@Component({
  selector: 'app-gettypes',
  templateUrl: './gettypes.component.html',
  styleUrls: ['./gettypes.component.scss'],
})

export class GettypesComponent implements OnInit {
    columnDefs: any = [{ headerName: 'name', field: 'name'  },{ headerName: 'decription', field: 'description'  },];
    public types:any = {
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
        private gettypesService: GettypesService,
        private router: Router,
    ) { }

    ngOnInit() {
        this.types.created_by = sessionStorage.getItem('email') || ''; 
        


    
    }
    GetAllValues() {
        this.gettypesService.GetAllValues().subscribe((data:any) => {
            this.rowData = data;
 	 	console.log(data);
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    Route(queryId:any) {
        this.router.navigate(['./updatetype'], { queryParams: { 'id': queryId } })
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