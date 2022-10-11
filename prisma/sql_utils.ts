import { prisma } from './client';

const fetchEvents = async() => {
  const res = await prisma.$queryRaw`
    SELECT 
      e.id, 
      e."createdAt" createdAt, 
      "startAt", 
      description, 
      venue, 
      "hostId", 
      title, 
      spots,
      array_agg(ue."userId") attendees
    FROM
      public."Event" e
    JOIN
      public."UserEvent" ue
    ON
      e.id = ue."eventId"
    WHERE
      ue."canceledAt" IS NULL
    GROUP BY
      e.id;
  `
  return res;
}

const fetchUser = async(id?: string) => {
  let res;
  if(id) {
    res = await prisma.$queryRaw`
      SELECT
        *
      FROM
        public."User" u
      WHERE
        u.id = ${id}
    `;
  } else {
    res = await prisma.$queryRaw`
      SELECT
        *
      FROM
        public."User"
    `;
  }
  return res;
}

(async()=>{
  const events_results = await fetchEvents();
  console.log('events_results', events_results);
  const users_results = await fetchUser();
  console.log('users_results', users_results);
  const userId_results = await fetchUser('thisisamiasid');
  console.log('userId_results', userId_results);
})()
