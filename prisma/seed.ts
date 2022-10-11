const { readFileSync } = require('fs');
import { prisma } from './client';

enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN'
}

type User = {
  id: string,
  name: string,
  twitterId?: string,
  email?: string,
  role: Role | string,
  createdAt?: Date
}

type EventType = {
  id: number,
  title: string,
  createdAt?: Date,
  startAt: Date,
  description: string,
  venue: string,
  hostId: string,
  spots: number
}

const users = [
  {
    id: "thisisamiasid",
    name: "mia",
    twitterId: "@mia_ca10",
    role: Role.ADMIN,
  },
  {
    id: "thisisatomosid",
    name: "Tomo🇨🇦",
    twitterId: "@tomo_jp_account",
    role: Role.ADMIN,
  },
  {
    id: "thisisakoichisid",
    name: "ko-ichi🇨🇦",
    twitterId: "@starterPG_51",
    role: Role.USER,
  },
  {
    id: "thisisakentosid",
    name: "KENTO🇨🇦",
    twitterId: "@KENTEA2111",
    role: Role.USER,
  }
];

const events = [
  {
    id: 1,
    title: "Past MokuMoku-Kai",
    startAt: new Date("2022-10-01T09:00:00"),
    description: readFileSync(require.resolve('./description.md'), 'utf-8'),
    venue: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.7784326623705!2d-123.12470348457617!3d49.280595478839906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717fd817f9a7%3A0xfccb2e63ec15af98!2sWaves%20Coffee%20House%20-%20Howe!5e0!3m2!1sen!2sca!4v1665131110100!5m2!1sen!2sca",
    hostId: "thisisamiasid",
    spots: 4,
  },
  {
    id: 2,
    title: "MokuMoku-Kai hosted by mia",
    startAt: new Date("2022-11-12T09:00:00"),
    description: readFileSync(require.resolve('./description.md'), 'utf-8'),
    venue: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.7784326623705!2d-123.12470348457617!3d49.280595478839906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717fd817f9a7%3A0xfccb2e63ec15af98!2sWaves%20Coffee%20House%20-%20Howe!5e0!3m2!1sen!2sca!4v1665131110100!5m2!1sen!2sca",
    hostId: "thisisamiasid",
    spots: 4,
  },
  {
    id: 3,
    title: "MokuMoku-Kai hosted by Tomo",
    startAt: new Date("2022-11-19T09:00:00"),
    description: readFileSync(require.resolve('./description.md'), 'utf-8'),
    venue: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.7784326623705!2d-123.12470348457617!3d49.280595478839906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717fd817f9a7%3A0xfccb2e63ec15af98!2sWaves%20Coffee%20House%20-%20Howe!5e0!3m2!1sen!2sca!4v1665131110100!5m2!1sen!2sca",
    hostId: "thisisatomosid",
    spots: 6,
  },
  {
    id: 4,
    title: "MokuMoku-Kai hosted by Tomo",
    startAt: new Date("2022-11-26T09:00:00"),
    description: readFileSync(require.resolve('./description.md'), 'utf-8'),
    venue: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.7784326623705!2d-123.12470348457617!3d49.280595478839906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717fd817f9a7%3A0xfccb2e63ec15af98!2sWaves%20Coffee%20House%20-%20Howe!5e0!3m2!1sen!2sca!4v1665131110100!5m2!1sen!2sca",
    hostId: "thisisatomosid",
    spots: 6,
  }
]

const main = async () => {
  const usersPromise = await createUsers();
  const eventsPromise = await createEvents();
  const results = await Promise.all([...usersPromise, ...eventsPromise]);
  await createUserEvent(users, events);

  console.log({
    ...results,
  });
};

const createUsers = async () => {
  const promises = users.map((el) => {
    return prisma.user.upsert({
      where: { id: el.id },
      update: {},
      create: {
        ...el
      },
    });
  });
  return await Promise.all(promises);
};

const createEvents = async () => {
  const promises = events.map((el, i) => {
    return prisma.event.upsert({
      where: {
        id: el.id
      },
      update: {
        ...el
      },
      create: {
        ...el
      },
    });
  });
  return await Promise.all(promises);
};

const createUserEvent = async(users: User[], events: EventType[]) => {
  for (let i = 0; i < events.length; i++) {
    // for (let user of users) {
    for (let j = 0; j < users.length; j++) {
      await prisma.userEvent.upsert({
        where: {
          eventId_userId: { eventId: events[i].id, userId: users[j].id }
        },
        update: {
          eventId: events[i].id,
          userId: users[j].id,
          canceledAt: j % 2 === 0 && users[j].id !== events[i].hostId ? new Date() : null
        },
        create: {
          eventId: events[i].id,
          userId: users[j].id,
          canceledAt: j % 2 === 0 && users[j].id !== events[i].hostId ? new Date() : null
        },
      })
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });