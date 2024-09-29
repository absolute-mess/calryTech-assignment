import { RoomServiceRequest } from '../models/room-service-request';
import { FileManager } from '../../utils/file-manager';
import { v4 as uuidv4 } from 'uuid';
import { IRequestService } from './IRequestService';

export class RequestService implements IRequestService{
  getAllRequests(): RoomServiceRequest[] {
    const requests = FileManager.readFile();
    
    return requests.sort((a, b) => a.priority - b.priority);
  }

  getRequestById(id: string): RoomServiceRequest | null {
    const requests = FileManager.readFile();
    return requests.find(request => request.id === id) || null;
  }

  createRequest(guestName: string, roomNumber: number, requestDetails: string, priority: number): RoomServiceRequest {
    const newRequest = new RoomServiceRequest(uuidv4(), guestName, roomNumber, requestDetails, priority);
    const requests = FileManager.readFile();
    requests.push(newRequest);
    FileManager.writeFile(requests);
    return newRequest;
  }

  updateRequest(id: string, updatedData: Partial<RoomServiceRequest>): RoomServiceRequest | null {
    const requests = FileManager.readFile();
    const requestIndex = requests.findIndex(request => request.id === id);

    if (requestIndex === -1) return null;

    requests[requestIndex] = { ...requests[requestIndex], ...updatedData };
    FileManager.writeFile(requests);
    return requests[requestIndex];
  }

  deleteRequest(id: string): boolean {
    let requests = FileManager.readFile();
    const initialLength = requests.length;
    requests = requests.filter(request => request.id !== id);
    
    if (initialLength === requests.length) return false;

    FileManager.writeFile(requests);
    return true;
  }

  markRequestAsComplete(id: string): RoomServiceRequest | null {
    return this.updateRequest(id, { status: 'completed' });
  }
}
