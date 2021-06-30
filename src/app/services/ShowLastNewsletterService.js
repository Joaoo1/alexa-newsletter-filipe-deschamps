import News from '../models/News';
import Newsletter from '../models/Newsletter';
import formatDate from '../utils/formatDate';

class ShowLastNewsletterService {
  async run() {
    const newsLetter = await Newsletter.findOne({
      attributes: ['date'],
      order: [['date', 'DESC'], ['news', 'id', 'ASC']],
      include: [
        {
          model: News,
          as: 'news',
          attributes: ['id', 'newsText'],
        },
      ],
    });
    const news = newsLetter.news.map((n) => n.newsText);
    const dateString = formatDate(newsLetter.date);

    const day = new Date(newsLetter.date).getDay();
    const isWeekend = day === 6 || day === 0;
    news.unshift(`Olá! Essas foram as notícias que chamaram atenção nest${isWeekend ? 'e' : 'a'} ${dateString}:`);
    return { news };
  }
}
export default new ShowLastNewsletterService();
