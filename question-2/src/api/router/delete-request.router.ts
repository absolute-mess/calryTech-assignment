import { Router } from 'express';
import { RequestController } from '../controller/request.controller';

const router = Router();

router.delete('/requests/:id', RequestController.deleteRequest);
export default router