import { FastifyInstance } from "fastify";
import { Sequelize } from "sequelize";

const getUserHandler: (sequelize: Sequelize) => () => void = (_sequelize: Sequelize) => () => {};

const initUserRoutes = (app: FastifyInstance, sequelize: Sequelize) => {
    app.route({
        method: 'GET',
        url: '/users',
        handler: getUserHandler(sequelize)
    });
};
export default initUserRoutes;