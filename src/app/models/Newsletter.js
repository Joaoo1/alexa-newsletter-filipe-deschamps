import Sequelize, { Model } from 'sequelize';

class Newsletter extends Model {
  static init(sequelize) {
    super.init(
      {
        date: Sequelize.DATEONLY,
      },
      {
        sequelize,
      },
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.News, {
      as: 'news',
      foreignKey: 'newsletter_id',
    });
  }
}

export default Newsletter;
