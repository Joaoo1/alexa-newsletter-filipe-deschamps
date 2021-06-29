import Newsletter from '../models/Newsletter';
import News from '../models/News';

class StoreNewsLetterService {
  async run(newsList, date) {
    const alreadyExists = await Newsletter.findOne({ where: { date } });
    if (alreadyExists) return;

    const news = newsList.filter((n) => n !== '').map((n) => ({ newsText: n }));
    await Newsletter.create({ date, news }, {
      include: [
        {
          model: News,
          as: 'news',
        },
      ],
    });
  }
}

export default new StoreNewsLetterService();
