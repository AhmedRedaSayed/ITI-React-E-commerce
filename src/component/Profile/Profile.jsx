import React from "react";
import { jwtDecode } from "jwt-decode";
export default function Profile() {
  let encodedToken = localStorage.getItem("token"); 
  let decodedToken = jwtDecode(encodedToken);
  return (
    <>
      <h1
        className="text-main"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        Hello {decodedToken.name}
      </h1>
    </>
  );
}
