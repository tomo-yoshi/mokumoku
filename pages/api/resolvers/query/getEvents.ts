import { prisma } from '@prisma/client';
import { QueryResolvers } from '@customTypes/generated/graphql';

export const getEvents: QueryResolvers['getEvemts'] = async () => {
  const res = await prisma.event.findMany();
  return res;
};