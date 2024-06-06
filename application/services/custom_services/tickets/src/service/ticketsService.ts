import { Request, Response } from 'express';
import {ticketsDao} from '../dao/ticketsDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';

















let tickets = new ticketsDao();

export class ticketsService {
    
    constructor() { }
    
    public  Delete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketsService.ts: Delete')
     let  ticketsId = req.params.id;
     tickets.Delete(ticketsId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketsService.ts: Delete')
             
             
            callback(response);

         });
    }
    
public  Search(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketsService.ts: Search')
     let  ticketsData = req.query;
     tickets.Search(ticketsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketsService.ts: Search')
             
             
            callback(response);

         });
    }
    
public  SearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketsService.ts: SearchForUpdate')
     let  ticketsData = req.body;
     tickets.SearchForUpdate(ticketsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketsService.ts: SearchForUpdate')
             
             
            callback(response);

         });
    }
    
public  Update(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketsService.ts: Update')
     let  ticketsData = req.body;
     tickets.Update(ticketsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketsService.ts: Update')
             
             
            callback(response);

         });
    }
    
public  GetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketsService.ts: GetEntityById')
     let  ticketsId = req.params.id;
     tickets.GetEntityById(ticketsId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketsService.ts: GetEntityById')
             
             
            callback(response);

         });
    }
    
public  GetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketsService.ts: GetAllValues')
     
     tickets.GetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketsService.ts: GetAllValues')
             
             
            callback(response);

         });
    }
    
public  Create(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketsService.ts: Create')
     let  ticketsData = req.body;
     tickets.Create(ticketsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketsService.ts: Create')
             
             
            callback(response);

         });
    }
    
public  GetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketsService.ts: GetNounCreatedBy')
     let  ticketsData = { created_by: req.query.createdby };
     tickets.GetNounCreatedBy(ticketsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketsService.ts: GetNounCreatedBy')
             
             
            callback(response);

         });
    }
    
    
    
    
}