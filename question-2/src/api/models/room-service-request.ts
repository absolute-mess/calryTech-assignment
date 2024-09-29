export class RoomServiceRequest {
    constructor(
        public id: string,
        public guestName: string,
        public roomNumber: number,
        public requestDetails: string,
        public priority: number,
        public status: 'received' | 'in progress' | 'awaiting confiration' | 'completed' | 'canceled' = 'received',
    ) {}
}