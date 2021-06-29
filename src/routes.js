import { Router } from 'express';
import LastNewsletterController from './app/controllers/LastNewsletterController';
import NewsletterController from './app/controllers/NewsletterController';

const routes = new Router();

routes.get('/last_newsletter', LastNewsletterController.show);

routes.get('/newsletter/:date', NewsletterController.show);

export default routes;
