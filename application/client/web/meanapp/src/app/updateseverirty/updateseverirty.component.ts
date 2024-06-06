import { Component, OnInit, ViewChild } from '@angular/core';
import { UpdateseverirtyService } from './updateseverirty.service';
import { ActivatedRoute } from '@angular/router';





@Component({
  selector: 'app-updateseverirty',
  templateUrl: './updateseverirty.component.html',
  styleUrls: ['./updateseverirty.component.scss'],
})

export class UpdateseverirtyComponent implements OnInit {
    queryId: any;
    public severity:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        description: '',
    }




    constructor (
        private updateseverirtyService: UpdateseverirtyService,
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.severity.created_by = sessionStorage.getItem('email') || ''; 
        
            this.activatedRoute.queryParams.subscribe((params:any) => { 
 this.queryId = params['id'];
            });


        this.GetEntityById();
    
    }
    Update() {
        this.updateseverirtyService.Update(this.severity).subscribe((data:any) => {
            this.severity.name = ''
 	 	this.severity.description = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GetEntityById() {
        this.updateseverirtyService.GetEntityById(this.queryId).subscribe((data:any) => {
            this.severity = data
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }


}