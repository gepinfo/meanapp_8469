import * as mongoose from 'mongoose';
import ticketsModel from '../models/daomodels/tickets';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'




export class ticketsDao {
    private tickets = ticketsModel;

    

    constructor() { }
    
    public async Delete(ticketsId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into ticketsDao.ts: Delete');

    

    
    
    
    this.tickets.findByIdAndRemove(ticketsId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from ticketsDao.ts: Delete');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Search(ticketsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into ticketsDao.ts: Search');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(ticketsData).forEach(
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
    this.tickets.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from ticketsDao.ts: Search');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async SearchForUpdate(ticketsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into ticketsDao.ts: SearchForUpdate');

    

    
    
    
    this.tickets.findOneAndUpdate({ _id: ticketsData._id }, ticketsData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from ticketsDao.ts: SearchForUpdate');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Update(ticketsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into ticketsDao.ts: Update');

    

    
    
    
    this.tickets.findOneAndUpdate({ _id: ticketsData._id }, ticketsData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from ticketsDao.ts: Update');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetEntityById(ticketsId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into ticketsDao.ts: GetEntityById');

    

    
    
    
    this.tickets.findById(ticketsId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from ticketsDao.ts: GetEntityById');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into ticketsDao.ts: GetAllValues');

    

    
    
    
    this.tickets.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from ticketsDao.ts: GetAllValues');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Create(ticketsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into ticketsDao.ts: Create');

    let temp = new ticketsModel(ticketsData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from ticketsDao.ts: Create');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetNounCreatedBy(ticketsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into ticketsDao.ts: GetNounCreatedBy');

    

    
    
    
    this.tickets.aggregate(([
                        { $match: { $and: [{ created_by: ticketsData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from ticketsDao.ts: GetNounCreatedBy');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}


}