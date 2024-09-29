import { RoomServiceRequest } from '../models/room-service-request';

export interface IRequestService {
  getAllRequests(): RoomServiceRequest[];
  getRequestById(id: string): RoomServiceRequest | null;
  createRequest(
    guestName: string,
    roomNumber: number,
    requestDetails: string,
    priority: number
  ): RoomServiceRequest;
  updateRequest(
    id: string,
    updatedData: Partial<RoomServiceRequest>
  ): RoomServiceRequest | null;
  deleteRequest(id: string): boolean;
  markRequestAsComplete(id: string): RoomServiceRequest | null;
}
