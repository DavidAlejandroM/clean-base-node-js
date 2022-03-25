import express from "express";
import {AbstractRoutesConfig} from "../../../helpers/abstract-entry-points/abstract-routes-config";
import {Test} from '../test/test'

export class RoutesConfig {

    static routes: Array<AbstractRoutesConfig> = [];

    static getRoutes(app: express.Application): Array<AbstractRoutesConfig> {
        this.routes.push(new Test(app));

        return this.routes;
    }
}
