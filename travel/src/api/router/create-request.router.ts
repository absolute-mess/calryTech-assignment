import { Router } from 'express';
import { RequestController } from '../controller/request.controller';

const router = Router();

router.post('/requests', RequestController.createRequest);

export default router;