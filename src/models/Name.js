'use strict';

import { sequelize } from '../utils/db.js';
import { DataTypes } from 'sequelize';

export const Name = sequelize.define('name', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
