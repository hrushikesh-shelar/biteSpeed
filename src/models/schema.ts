import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../db';
export default class Contact extends Model {}

interface ContactAttributes {
	id: number;
	phoneNumber: string | null;
	email: string | null;
	linkedId: number | null;
	linkPrecedence: 'secondary' | 'primary';
	createdAt: Date;
	updatedAt: Date;
	deletedAt?: Date;
}


Contact.init(
	{
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    phoneNumber: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    linkedId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    linkPrecedence: {
      type: DataTypes.ENUM('secondary', 'primary'),
      defaultValue: 'primary',
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
	{ sequelize, modelName: 'contact' },
);


export { Contact, ContactAttributes };
