import { Component, OnInit, ViewChild } from '@angular/core';
import { TicketupdateService } from './ticketupdate.service';
import { ActivatedRoute } from '@angular/router';





@Component({
  selector: 'app-ticketupdate',
  templateUrl: './ticketupdate.component.html',
  styleUrls: ['./ticketupdate.component.scss'],
})

export class TicketupdateComponent implements OnInit {
    queryId: any;
    public tickets:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        description: '',
        types: '',
        severity: '',
    }




    constructor (
        private ticketupdateService: TicketupdateService,
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.tickets.created_by = sessionStorage.getItem('email') || ''; 
        
            this.activatedRoute.queryParams.subscribe((params:any) => { 
 this.queryId = params['id'];
            });


        this.GetEntityById();
    
    }
    typesGetAllValues() {
        this.ticketupdateService.typesGetAllValues().subscribe((data:any) => {
            console.log(data);
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    severityGetAllValues() {
        this.ticketupdateService.severityGetAllValues().subscribe((data:any) => {
            console.log(data);
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    Update() {
        this.ticketupdateService.Update(this.tickets).subscribe((data:any) => {
            this.tickets.name = ''
 	 	this.tickets.description = ''
 	 	this.tickets.types = ''
 	 	this.tickets.severity = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GetEntityById() {
        this.ticketupdateService.GetEntityById(this.queryId).subscribe((data:any) => {
            this.tickets = data
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }


}