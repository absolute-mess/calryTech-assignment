import { Request, Response } from 'express';
import { RequestService } from '../service/room.service';

const requestService = new RequestService();

export class RequestController {
  static getAllRequests(req: Request, res: Response) {
    const requests = requestService.getAllRequests();
    res.json(requests);
  }

  static getRequestById(req: Request, res: Response) {
    const request = requestService.getRequestById(req.params.id);
    if (request) {
      res.json(request);
    } else {
      res.status(404).json({ message: 'Request not found' });
    }
  }

  static createRequest(req: Request, res: Response) {
    const { guestName, roomNumber, requestDetails, priority } = req.body;
    const newRequest = requestService.createRequest(guestName, roomNumber, requestDetails, priority);
    res.status(201).json(newRequest);
  }

  static updateRequest(req: Request, res: Response) {
    const updatedRequest = requestService.updateRequest(req.params.id, req.body);
    if (updatedRequest) {
      res.json(updatedRequest);
    } else {
      res.status(404).json({ message: 'Request not found' });
    }
  }

  static deleteRequest(req: Request, res: Response) {
    const success = requestService.deleteRequest(req.params.id);
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Request not found' });
    }
  }

  static completeRequest(req: Request, res: Response) {
    const updatedRequest = requestService.markRequestAsComplete(req.params.id);
    if (updatedRequest) {
      res.json(updatedRequest);
    } else {
      res.status(404).json({ message: 'Request not found' });
    }
  }
}
