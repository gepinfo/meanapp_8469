import * as mongoose from 'mongoose';
import typesModel from '../models/daomodels/types';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'




export class typesDao {
    private types = typesModel;

    

    constructor() { }
    
    public async Delete(typesId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into typesDao.ts: Delete');

    

    
    
    
    this.types.findByIdAndRemove(typesId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from typesDao.ts: Delete');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Search(typesData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into typesDao.ts: Search');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(typesData).forEach(
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
    this.types.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from typesDao.ts: Search');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async SearchForUpdate(typesData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into typesDao.ts: SearchForUpdate');

    

    
    
    
    this.types.findOneAndUpdate({ _id: typesData._id }, typesData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from typesDao.ts: SearchForUpdate');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Update(typesData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into typesDao.ts: Update');

    

    
    
    
    this.types.findOneAndUpdate({ _id: typesData._id }, typesData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from typesDao.ts: Update');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetEntityById(typesId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into typesDao.ts: GetEntityById');

    

    
    
    
    this.types.findById(typesId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from typesDao.ts: GetEntityById');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into typesDao.ts: GetAllValues');

    

    
    
    
    this.types.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from typesDao.ts: GetAllValues');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Create(typesData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into typesDao.ts: Create');

    let temp = new typesModel(typesData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from typesDao.ts: Create');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetNounCreatedBy(typesData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into typesDao.ts: GetNounCreatedBy');

    

    
    
    
    this.types.aggregate(([
                        { $match: { $and: [{ created_by: typesData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from typesDao.ts: GetNounCreatedBy');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}


}