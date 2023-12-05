import React from "react";
import AppHeader from "../components/common/AppHeader";

const AuthPage = () => {
  const handleClick = () => {
    let tmpwindow = window.open("about:blank");
    const clientId = "2ad459fe-b374-4771-bc95-ab37bdec47c1";
    tmpwindow.location.href = `https://testapi.openbanking.or.kr/oauth/2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=http://localhost:3000/authResult&scope=login inquiry transfer&state=12345678901234567890123456789012&auth_type=0`;
  };

  return (
    <div>
      <AppHeader title={"사용자 인증"}></AppHeader>
      <br></br>
      <center><button onClick={handleClick}>인증하기</button></center>
    </div>
  );
};

export default AuthPage;