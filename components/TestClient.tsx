import React from "react";
import { gql, useQuery } from "@apollo/client";

type User = {
  id: string | number;
  name: string;
};

const getUserQuery = gql`
  query {
    getUser {
      id
      name
    }
  }
`;

export const TestClient = () => {
  const { data, error, loading } = useQuery(getUserQuery);
  const users: [User] = data?.getUser;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!{error.message}</p>;
  return (
    <>
      {users &&
        users.map((user: User) => (
          <div key={user.id}>
            <h1>id:{user.id}</h1>
            <h2>name:{user.name}</h2>
          </div>
        ))}
    </>
  );
};
