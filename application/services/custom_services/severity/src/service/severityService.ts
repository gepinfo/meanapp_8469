import { Request, Response } from 'express';
import {severityDao} from '../dao/severityDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';

















let severity = new severityDao();

export class severityService {
    
    constructor() { }
    
    public  Delete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into severityService.ts: Delete')
     let  severityId = req.params.id;
     severity.Delete(severityId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from severityService.ts: Delete')
             
             
            callback(response);

         });
    }
    
public  Search(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into severityService.ts: Search')
     let  severityData = req.query;
     severity.Search(severityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from severityService.ts: Search')
             
             
            callback(response);

         });
    }
    
public  SearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into severityService.ts: SearchForUpdate')
     let  severityData = req.body;
     severity.SearchForUpdate(severityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from severityService.ts: SearchForUpdate')
             
             
            callback(response);

         });
    }
    
public  Update(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into severityService.ts: Update')
     let  severityData = req.body;
     severity.Update(severityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from severityService.ts: Update')
             
             
            callback(response);

         });
    }
    
public  GetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into severityService.ts: GetEntityById')
     let  severityId = req.params.id;
     severity.GetEntityById(severityId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from severityService.ts: GetEntityById')
             
             
            callback(response);

         });
    }
    
public  GetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into severityService.ts: GetAllValues')
     
     severity.GetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from severityService.ts: GetAllValues')
             
             
            callback(response);

         });
    }
    
public  Create(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into severityService.ts: Create')
     let  severityData = req.body;
     severity.Create(severityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from severityService.ts: Create')
             
             
            callback(response);

         });
    }
    
public  GetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into severityService.ts: GetNounCreatedBy')
     let  severityData = { created_by: req.query.createdby };
     severity.GetNounCreatedBy(severityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from severityService.ts: GetNounCreatedBy')
             
             
            callback(response);

         });
    }
    
    
    
    
}