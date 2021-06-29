module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('news', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      newsletterId: {
        type: Sequelize.INTEGER,
        references: { model: 'newsletters', key: 'id' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        allowNull: false,
        field: 'newsletter_id',
      },
      newsText: {
        type: Sequelize.TEXT,
        allowNull: false,
        field: 'news_text',
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'created_at',
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'updated_at',
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('news');
  },
};
