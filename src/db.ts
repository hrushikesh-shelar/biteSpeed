import { Sequelize } from 'sequelize';


const sequelize = new Sequelize(
	'postgres://hrushikesh:4MWKh0fUmvNSqo3gff8f7NaV9hJAr2Jm@dpg-cjifthgcfp5c73cuqil0-a.oregon-postgres.render.com/bitespeed_t701',
);

const connect = () => {
	try {
		sequelize.authenticate().then(() => {
			console.log('Postgres connection has been established successfully.');
		});
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
};

export { sequelize, connect };
