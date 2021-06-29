import Sequelize, { Model } from 'sequelize';

class News extends Model {
  static init(sequelize) {
    super.init(
      {
        newsText: Sequelize.TEXT,
      },
      {
        sequelize,
      },
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Newsletter, { foreignKey: 'newsletterId', targetKey: 'id', as: 'newsletter' });
  }
}

export default News;
