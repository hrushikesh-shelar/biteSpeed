import { v4 as uuid } from 'uuid';
import { Contact, ContactAttributes } from '../models/schema';
import { Op } from 'sequelize';

// Provide resolver functions for your schema fields
export const resolvers = {
	Mutations: {
		addContract: async (phoneNumber: any, email: any) => {
			const id = uuid();

            const allPreviousContacts = await Contact.findAll({
							where: {
								[Op.or]: [{ phoneNumber, email }],
							},
						});
            
            console.log('allPreviousContacts:', allPreviousContacts);
            
            
            // const q = await Contact.create({
			// 	id,
			// 	phoneNumber,
            //     email
			// });
			
            
            return {
				isSuccess: true,
			};
		},
	},
};