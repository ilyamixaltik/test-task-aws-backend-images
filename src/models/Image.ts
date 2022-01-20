import { Sequelize, DataTypes } from 'sequelize';
import { dataBaseLink } from '../config';

const sequelize = new Sequelize(dataBaseLink);

const ImageModel = {
  name: {
    type: DataTypes.STRING
  },
  nameBucket: {
    type: DataTypes.STRING
  },
  path: {
    type: DataTypes.STRING
  },
  timeStamp: {
    type: DataTypes.TIME
  }
};

export default sequelize.define('Image', ImageModel);