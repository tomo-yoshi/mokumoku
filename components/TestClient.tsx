import React from "react";
import { gql, useQuery } from "@apollo/client";

type User = {
  id: string | number;
  name: string;
};

const getUserQuery = gql`
  query {
    getUser(id: 1111) {
      id
      name
    }
  }
`;

export const TestClient = () => {
  const { data, error, loading } = useQuery(getUserQuery);
  const user = data && data.getUser;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!{error.message}</p>;
  return (
    <>
      <div>
        <h1>id:{user && user.id}</h1>
        <h2>name:{user && user.name}</h2>
      </div>
    </>
  );
};
