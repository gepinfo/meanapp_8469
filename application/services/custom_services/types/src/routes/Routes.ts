import { Request, Response, NextFunction } from "express";
import { typesController } from '../controller/typesController';


export class Routes {
    private types: typesController = new typesController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/types/:id').delete(this.types.Delete);
app.route('/types/get/search').get(this.types.Search);
app.route('/types/get/update').put(this.types.SearchForUpdate);
app.route('/types').put(this.types.Update);
app.route('/types/:id').get(this.types.GetEntityById);
app.route('/types').get(this.types.GetAllValues);
app.route('/types').post(this.types.Create);
app.route('/types/userid/created_by').get(this.types.GetNounCreatedBy);
     }

}