import type { NextPage } from "next";
import styled from 'styled-components';
import tw from 'twin.macro';

const Admin: NextPage = () => {
  return (
    <>
      <div className="text-center text-3xl">Admin</div>
      <StyledButton>
        It{"'"}s from styled-components!
      </StyledButton>
      <br />
      <hr />
      <TailwindButton>
        It{"'"}s from Tailwind!
      </TailwindButton>
      <br />
      <hr />
      <ConditionalButton isRed={false}>
        It{"'"}s a Conditional!
      </ConditionalButton>
    </>
  )
}

const StyledButton = styled.button`
  background-color: red;
  color: white;
`;

const TailwindButton = tw.button`
  bg-red-500 hover:bg-red-700
`;

interface Props {
  isRed: boolean
};

const ConditionalButton = styled.button(({ isRed }: Props) => [
  isRed ? tw`bg-red-500 hover:bg-red-700` : tw`bg-blue-500 hover:bg-blue-700`,
  tw`
    text-white
    font-bold
    py-2
    px-4
    border
    border-black
    rounded-xl
  `,
]);

export default Admin;