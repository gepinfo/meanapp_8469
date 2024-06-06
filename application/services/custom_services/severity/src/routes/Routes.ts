import { Request, Response, NextFunction } from "express";
import { severityController } from '../controller/severityController';


export class Routes {
    private severity: severityController = new severityController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/severity/:id').delete(this.severity.Delete);
app.route('/severity/get/search').get(this.severity.Search);
app.route('/severity/get/update').put(this.severity.SearchForUpdate);
app.route('/severity').put(this.severity.Update);
app.route('/severity/:id').get(this.severity.GetEntityById);
app.route('/severity').get(this.severity.GetAllValues);
app.route('/severity').post(this.severity.Create);
app.route('/severity/userid/created_by').get(this.severity.GetNounCreatedBy);
     }

}