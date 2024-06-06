import { Component, OnInit, ViewChild } from '@angular/core';
import { CreateticketService } from './createticket.service';





@Component({
  selector: 'app-createticket',
  templateUrl: './createticket.component.html',
  styleUrls: ['./createticket.component.scss'],
})

export class CreateticketComponent implements OnInit {
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
        private createticketService: CreateticketService,
    ) { }

    ngOnInit() {
        this.tickets.created_by = sessionStorage.getItem('email') || ''; 
        


    
    }
    typesGetAllValues() {
        this.createticketService.typesGetAllValues().subscribe((data:any) => {
            console.log(data);
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    severityGetAllValues() {
        this.createticketService.severityGetAllValues().subscribe((data:any) => {
            console.log(data);
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    Create() {
        this.createticketService.Create(this.tickets).subscribe((data:any) => {
            this.tickets.name = ''
 	 	this.tickets.description = ''
 	 	this.tickets.types = ''
 	 	this.tickets.severity = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }


}