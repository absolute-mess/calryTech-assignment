import { Router } from 'express';
import { RequestController } from '../controller/request.controller';

const router = Router();


router.post('/requests/:id/complete', RequestController.completeRequest);

export default router;