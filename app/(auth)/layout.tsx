import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <h1>User Authentication</h1>
      {children}
    </main>
  );
};

export default AuthLayout;
