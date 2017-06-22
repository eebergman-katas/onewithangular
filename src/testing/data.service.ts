import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import * as mocks from './mocks.spec';

export class DataServiceStub {

    public fetchCharacters = jasmine.createSpy('getCharacters')
        .and.returnValue(of(mocks.characters));
}
