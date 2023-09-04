import React from "react";
import Menu from "src/components/Menu/Menu";

type Props = { children: React.ReactNode };

const Page: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Menu />
      <main className="container mx-auto py-8">
        <section className="bg-white shadow-md p-4 rounded">{children}</section>
      </main>
    </>
  );
};

export default Page;
