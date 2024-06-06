import * as mongoose from 'mongoose';
import severityModel from '../models/daomodels/severity';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'




export class severityDao {
    private severity = severityModel;

    

    constructor() { }
    
    public async Delete(severityId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into severityDao.ts: Delete');

    

    
    
    
    this.severity.findByIdAndRemove(severityId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from severityDao.ts: Delete');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Search(severityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into severityDao.ts: Search');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(severityData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.severity.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from severityDao.ts: Search');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async SearchForUpdate(severityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into severityDao.ts: SearchForUpdate');

    

    
    
    
    this.severity.findOneAndUpdate({ _id: severityData._id }, severityData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from severityDao.ts: SearchForUpdate');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Update(severityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into severityDao.ts: Update');

    

    
    
    
    this.severity.findOneAndUpdate({ _id: severityData._id }, severityData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from severityDao.ts: Update');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetEntityById(severityId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into severityDao.ts: GetEntityById');

    

    
    
    
    this.severity.findById(severityId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from severityDao.ts: GetEntityById');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into severityDao.ts: GetAllValues');

    

    
    
    
    this.severity.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from severityDao.ts: GetAllValues');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Create(severityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into severityDao.ts: Create');

    let temp = new severityModel(severityData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from severityDao.ts: Create');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetNounCreatedBy(severityData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into severityDao.ts: GetNounCreatedBy');

    

    
    
    
    this.severity.aggregate(([
                        { $match: { $and: [{ created_by: severityData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from severityDao.ts: GetNounCreatedBy');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}


}