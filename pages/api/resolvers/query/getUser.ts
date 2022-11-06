import { prisma } from '@customPrisma/client';
import { QueryResolvers } from '@customTypes/generated/graphql';

export const getUser: QueryResolvers['getUser'] = async (_root: any, { id }: any) => {
  return prisma.user.findUnique({
    where: {
      id: id
    }
  });
}