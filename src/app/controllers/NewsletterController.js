import ShowNewsletterService from '../services/ShowNewsletterService';

const LastNewsletterControler = {
  async show(req, res) {
    try {
      const newsletter = await ShowNewsletterService.run(req.param.date);
      return res.status(200).json(newsletter);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
};

export default LastNewsletterControler;
