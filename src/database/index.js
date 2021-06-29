import Sequelize from 'sequelize';

import dbConfig from '../app/config/database';
import NewsLetter from '../app/models/Newsletter';
import News from '../app/models/News';

const models = [NewsLetter, News];

function Database() {
  const connection = new Sequelize(dbConfig);
  models.map((model) => model.init(connection));
  models.map((model) => model.associate && model.associate(connection.models));
}

export default Database();
