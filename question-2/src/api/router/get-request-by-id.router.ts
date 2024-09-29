import { Router } from 'express';
import { RequestController } from '../controller/request.controller';

const router = Router();

router.get('/requests/:id', RequestController.getRequestById);

export default router;