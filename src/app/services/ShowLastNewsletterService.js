import News from '../models/News';
import Newsletter from '../models/Newsletter';
import formatDate from '../utils/formatDate';

class ShowLastNewsletterService {
  async run() {
    const newsLetter = await Newsletter.findOne({
      attributes: ['date'],
      order: [['date', 'DESC']],
      include: [
        {
          model: News,
          as: 'news',
          attributes: ['newsText'],
        },
      ],
    });
    const news = newsLetter.news.map((n) => n.newsText);
    const data = formatDate(newsLetter.date);
    news.unshift(`Olá! Essas foram as notícias que chamaram atenção neste ${data}:`);
    return { news };
  }
}
export default new ShowLastNewsletterService();
