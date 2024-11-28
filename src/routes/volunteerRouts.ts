import express from 'express';
import { createVolunteerController, getVolunteerOpportunities, getVolunteerOpportunitiesByRefugeeId, deleteVolunteerOpportunity } from '../controllers/volunteersController';
import { checkRole } from '../middlewares/roleMiddleware';
import { authenticateToken } from '../middlewares/authMiddleware';

const volunteerRoutes = express.Router();

volunteerRoutes.get('/', authenticateToken,getVolunteerOpportunities);
volunteerRoutes.get('/:id', getVolunteerOpportunitiesByRefugeeId);
volunteerRoutes.post('/:id', checkRole('refugee'), createVolunteerController);
volunteerRoutes.delete('/:id', checkRole('refugee'), deleteVolunteerOpportunity);

export default volunteerRoutes;
