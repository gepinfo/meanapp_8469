import { Request, Response } from 'express';
import {typesDao} from '../dao/typesDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';

















let types = new typesDao();

export class typesService {
    
    constructor() { }
    
    public  Delete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into typesService.ts: Delete')
     let  typesId = req.params.id;
     types.Delete(typesId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from typesService.ts: Delete')
             
             
            callback(response);

         });
    }
    
public  Search(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into typesService.ts: Search')
     let  typesData = req.query;
     types.Search(typesData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from typesService.ts: Search')
             
             
            callback(response);

         });
    }
    
public  SearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into typesService.ts: SearchForUpdate')
     let  typesData = req.body;
     types.SearchForUpdate(typesData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from typesService.ts: SearchForUpdate')
             
             
            callback(response);

         });
    }
    
public  Update(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into typesService.ts: Update')
     let  typesData = req.body;
     types.Update(typesData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from typesService.ts: Update')
             
             
            callback(response);

         });
    }
    
public  GetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into typesService.ts: GetEntityById')
     let  typesId = req.params.id;
     types.GetEntityById(typesId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from typesService.ts: GetEntityById')
             
             
            callback(response);

         });
    }
    
public  GetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into typesService.ts: GetAllValues')
     
     types.GetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from typesService.ts: GetAllValues')
             
             
            callback(response);

         });
    }
    
public  Create(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into typesService.ts: Create')
     let  typesData = req.body;
     types.Create(typesData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from typesService.ts: Create')
             
             
            callback(response);

         });
    }
    
public  GetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into typesService.ts: GetNounCreatedBy')
     let  typesData = { created_by: req.query.createdby };
     types.GetNounCreatedBy(typesData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from typesService.ts: GetNounCreatedBy')
             
             
            callback(response);

         });
    }
    
    
    
    
}