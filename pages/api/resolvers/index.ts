import { Resolvers } from '../../../types/generated/graphql';
import * as query from './query';
import { prisma } from '../../../prisma/client';

export const resolvers: Resolvers = {
  Query: query,

  Event: {
    host: (event: { hostId: string; }) => prisma.user.findUnique({
      where: {
        id: event.hostId
      }
    }),
    attendees: async(event: { id: number }) => {
      const ueRes = await prisma.userEvent.findMany({
        where: {
          eventId: event.id
        }
      });
      const promises = ueRes.map((el) => prisma.user.findUnique({
        where: {
          id: el.userId
        }
      }));
      return Promise.all(promises);
    },
  },
  User: {
    hostEvents: (user: { id: string }) => {
      return prisma.event.findMany({
        where: {
          hostId: user.id
        }
      });
    },
    joinEvents: async(user: { id: string }) => {
      const ueRes = await prisma.userEvent.findMany({
        where: {
          AND: [
            {
              userId: user.id
            },
            {
              canceledAt: null
            }
          ]
        }
      });
      const promises = ueRes.map((el) => prisma.event.findUnique({
        where: {
          id: el.eventId
        }
      }));
      return Promise.all(promises);
    }
  }
};