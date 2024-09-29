import { Router } from "express";

import createRequest from "./api/router/create-request.router"
import getRequestById from "./api/router/get-request-by-id.router"
import getRequests from "./api/router/get-requests.router"
import markComplete from "./api/router/complete.router"
import editRequest from "./api/router/update-request.router"
import deleteRequest from "./api/router/delete-request.router"

const router = Router();

const rootRoute = '/';

router.get('/',(req,res)=>{res.send('Welcome to the API')});
router.use(rootRoute, createRequest);
router.use(rootRoute, getRequestById);
router.use(rootRoute, getRequests);
router.use(rootRoute, markComplete);
router.use(rootRoute, editRequest);
router.use(rootRoute, deleteRequest);


export default router;