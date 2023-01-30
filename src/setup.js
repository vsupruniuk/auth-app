'use strict';

import 'dotenv/config';
import './models/Name.js';
import { sequelize } from './utils/db.js';

sequelize.sync({ force: true });
