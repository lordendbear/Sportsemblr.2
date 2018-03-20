/* eslint-env mocha */

import createRequestMock from '../req.mock';
import createResponseMock from '../res.mock';

import initUserController from '../../../api/users/user.controller';

import sinon from 'sinon';

describe('userController', () => {
    describe('create', () => {
        let controller = null;
        let data = null;

        beforeEach(() => {
            data = {
                findByEmail: (email) => {
                    return Promise.resolve({});
                },
                create: (user) => {
                    return Promise.resolve(user);
                }
            }

            controller = initUserController(data);
        });

        it('Empty req.body, should sendStatus 400', () => {
            const req = createRequestMock();
            const res = createResponseMock();

            const spy = sinon.spy(res, 'sendStatus');

            controller.create(req, res);

            sinon.assert.calledWith(spy, 400);
        });

        it('No user email, should sendStatus 400', () => {
            const req = createRequestMock({ email: '' });
            const res = createResponseMock();

            const spy = sinon.spy(res, 'sendStatus');

            controller.create(req, res);

            sinon.assert.calledWith(spy, 400);
        });

        it('No user password, should sendStatus 400', () => {
            const req = createRequestMock({ email: 'email' });
            const res = createResponseMock();

            const spy = sinon.spy(res, 'sendStatus');

            controller.create(req, res);

            sinon.assert.calledWith(spy, 400);
        });

        it('Should call data.findByEmail', () => {
            const user = { email: 'email', password: 'password' };
            const req = createRequestMock(user);
            const res = createResponseMock();

            const spy = sinon.spy(data, 'findByEmail');

            controller.create(req, res);

            sinon.assert.calledWith(spy, user.email);
        });
    });
})