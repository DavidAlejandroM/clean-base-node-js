import {Application, Request, Response} from "express";
import {AbstractRoutesConfig} from "../../../helpers/abstract-entry-points/abstract-routes-config";
import {TestUseCase} from "../../../../core/use-case/test-use-case";

export class Test extends AbstractRoutesConfig {
    constructor(app: Application) {
        super(app, "TestRoutes");
    }

    configureRoutes(): Application {
        this.app
            .route("/api/test")
            .get(this.get)
            .post(this.post);


        return this.app;
    }

    post(req: Request, res: Response) {
        res.status(200).json({msg: "post", date: new Date()});
    }

    get(req: Request, res: Response){
        res.status(200).json({msg: "get", date: new Date()});
    }
}
