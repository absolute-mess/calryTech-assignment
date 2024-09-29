import { Router } from 'express';
import { RequestController } from '../controller/request.controller';

const router = Router();


router.put('/requests/:id', RequestController.updateRequest);

export default router;