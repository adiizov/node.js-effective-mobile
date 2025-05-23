import { Router } from 'express';
import {
  cancelRequest,
  completeRequest,
  createRequest,
  startProcessingRequest,
  cancelAllInProgress, getRequests,
} from '../controllers/requests.controller';

const router = Router();

router.post('/', createRequest);
router.post('/:id/process', startProcessingRequest);
router.post('/:id/complete', completeRequest);
router.post('/:id/cancel', cancelRequest);
router.get('/', getRequests);
router.post('/cancel-all-in-progress', cancelAllInProgress);


export default router;