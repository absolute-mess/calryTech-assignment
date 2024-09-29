import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hotel Room Service API',
      version: '1.0.0',
      description: 'API to manage hotel room requests',
    },
    servers: [
      {
        url: `http://localhost:${PORT}/api`,
      },
    ],
    components: {
      schemas: {
        RoomServiceRequest: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'Unique identifier for the room service request',
              example: '12345',
            },
            guestName: {
              type: 'string',
              description: 'Full name of the guest',
              example: 'John Doe',
            },
            roomNumber: {
              type: 'integer',
              description: 'Room number associated with the request',
              example: 101,
            },
            requestDetails: {
              type: 'string',
              description: 'Detailed information about the room service request',
              example: 'Request for extra towels and toiletries',
            },
            priority: {
              type: 'integer',
              description: 'Priority of the request, with lower numbers indicating higher urgency',
              example: 1,
            },
            status: {
              type: 'string',
              description: 'Current status of the room service request',
              enum: ['received', 'in progress', 'awaiting confirmation', 'completed', 'canceled'],
              example: 'in progress',
            },
          },
        },
      },
    },
  },
  apis: ['./src/api/router/*.ts'],
};

const swaggerDocs = swaggerJsDoc(options);

export { swaggerUi, swaggerDocs };