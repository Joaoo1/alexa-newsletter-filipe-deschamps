import ShowLastNewsletterService from '../services/ShowLastNewsletterService';

const LastNewsletterControler = {
  async show(req, res) {
    try {
      const newsletter = await ShowLastNewsletterService.run();
      return res.status(200).json(newsletter);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
};

export default LastNewsletterControler;
