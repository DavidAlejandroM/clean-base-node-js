import {TestRepository} from "../../../../core/model/user/test-repository";
import {Test} from "../../../../core/model/user/test";

export class TestRepositoryAdapter implements TestRepository {
    getAllTest(): Promise<Array<Test>> {
        return Promise.resolve([]);
    }

}
