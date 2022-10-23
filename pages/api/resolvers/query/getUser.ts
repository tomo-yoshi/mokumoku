import { prisma } from '../../../../prisma/client';
import { QueryResolvers } from '../../../../@types/generated/graphql';

export const getUser: QueryResolvers['getUser'] = async (_root: any, { id }: any) => {
  return prisma.user.findUnique({
    where: {
      id: id
    }
  });
}