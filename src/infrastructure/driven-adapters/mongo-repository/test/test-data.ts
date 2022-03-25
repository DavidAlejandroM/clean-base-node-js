import mongoose, { model, Schema, Model, Document } from 'mongoose';
import {ITestData} from "./i-test-data";

const TestSchema: Schema = new Schema({
    tipoCarnet: { type: String,  },
});

export const TestData: Model<ITestData> = model('User', TestSchema);

