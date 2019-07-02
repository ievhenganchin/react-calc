import { api } from '../api';

describe('api middleware', () => {

    it('call next on non-api action', () => {
        const next = jest.fn();
        expect(api({})(next)({
            type: 'TEST'
        })).toBeUndefined();

        expect(next).toBeCalledWith({
            type: 'TEST'
        });
    });

    it('skip call without payload', () => {        
        expect(api({})()({
            type: 'CALL_API'
        })).toBeUndefined();
    });

    it('skip call without array of types', () => {        
        expect(api({})()({
            type: 'CALL_API',
            payload: {}
        })).toBeUndefined();
    });

    it('skip call with wrong types array length', () => {        
        expect(api({})()({
            type: 'CALL_API',
            payload: {
                types: [ '1', '2']
            }
        })).toBeUndefined();
    });

    it('return Promise on api call', () => {
        const dispatch = jest.fn();

        expect(api({dispatch})()({
            type: 'CALL_API',
            payload: {
                types: ['1', '2', '3']
            }
        })).toBeInstanceOf(Promise);

        expect(dispatch).toBeCalledWith({ type:'1' })
    });

    it.skip('resolve promise with data', async () => {
        const dispatch = jest.fn();

        const res = await api({dispatch})()({
            type: 'CALL_API',
            payload: {
                types: ['1', '2', '3']
            }
        });

        expect(res).resolves.toEqual(undefined);
    });
});