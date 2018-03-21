/* eslint-env mocha */

import { Promise } from 'bluebird';

import createRequestMock from '../req.mock';
import createResponseMock from '../res.mock';

import initUserController from '../../../api/users/user.controller';

import sinon from 'sinon';

describe('userController', () => {
    describe('create', () => {
        const next = (err) => { console.log(err) };

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

            spy.calledWith(400);
        });

        it('No user email, should sendStatus 400', () => {
            const req = createRequestMock({ email: '' });
            const res = createResponseMock();

            const spy = sinon.spy(res, 'sendStatus');

            controller.create(req, res);

            spy.calledWith(400);
        });

        it('No user password, should sendStatus 400', () => {
            const req = createRequestMock({ email: 'email' });
            const res = createResponseMock();

            const spy = sinon.spy(res, 'sendStatus');

            controller.create(req, res);

            spy.calledWith(400);
        });

        it('Should call data.findByEmail', () => {
            const user = { email: 'email', password: 'password' };
            const req = createRequestMock(user);
            const res = createResponseMock();

            const spy = sinon.spy(data, 'findByEmail');

            controller.create(req, res, next);

            spy.calledWith(user.email);
        });

        it('There is user, should sendStatus 400 with error message', () => {
            const user = { email: 'email', password: 'password' };
            const req = createRequestMock(user);
            const res = createResponseMock();

            sinon.stub(data, 'findByEmail').callsFake(() => {
                return Promise.resolve(user);
            });

            const statusSpy = sinon.spy(res, 'sendStatus');
            const bodySpy = sinon.spy(res, 'send');

            controller.create(req, res, next);

            statusSpy.calledWith(400);
            bodySpy.calledWith({
                error: 'User already exists'
            });
        });

        it('There is no user, should call data.create', () => {
            const user = { email: 'email', password: 'password' };
            const req = createRequestMock(user);
            const res = createResponseMock();

            sinon.stub(data, 'findByEmail').callsFake(() => {
                return Promise.resolve(false);
            });

            const spy = sinon.spy(data, 'create');

            controller.create(req, res, next);

            spy.calledWith(user);
        });

        it('Create successfull, should send status 200 with correct result', () => {
            const user = { email: 'email', password: 'password', name: 'name' };
            const req = createRequestMock(user);
            const res = createResponseMock();

            sinon.stub(data, 'findByEmail').callsFake(() => {
                return Promise.resolve(false);
            });

            sinon.stub(data, 'create').callsFake(() => {
                return Promise.resolve({});
            });

            const statusSpy = sinon.spy(res, 'sendStatus');
            const bodySpy = sinon.spy(res, 'send');

            controller.create(req, res, next);

            statusSpy.calledWith(200);
            bodySpy.calledWith({
                email: user.email,
                name: user.name
            })
        });
    });
})