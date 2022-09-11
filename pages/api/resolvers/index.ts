const { prisma } = require('../../../lib/prisma')

export const resolvers = {
  Query: {
    getUser: async() => {
      const res = await prisma.user.findMany();
      // console.log(res);
      return res;
    },
    hello: (): String => "Hello world!!!"
  },
};