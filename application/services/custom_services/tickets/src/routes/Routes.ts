import { Request, Response, NextFunction } from "express";
import { ticketsController } from '../controller/ticketsController';


export class Routes {
    private tickets: ticketsController = new ticketsController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/tickets/:id').delete(this.tickets.Delete);
app.route('/tickets/get/search').get(this.tickets.Search);
app.route('/tickets/get/update').put(this.tickets.SearchForUpdate);
app.route('/tickets').put(this.tickets.Update);
app.route('/tickets/:id').get(this.tickets.GetEntityById);
app.route('/tickets').get(this.tickets.GetAllValues);
app.route('/tickets').post(this.tickets.Create);
app.route('/tickets/userid/created_by').get(this.tickets.GetNounCreatedBy);
     }

}