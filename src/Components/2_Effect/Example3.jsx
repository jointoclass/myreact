import React, { use, useEffect, useState } from "react";

const Example3 = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    sendAPI.then((response) => {
      console.log("서버로부터 응답 도착");
      setData(response);
      setLoading(false);
    });
  }, []);

  return ( 
    <div>{loading ? <p>로딩 중...</p> : <p>데이터 : {data.title}</p>}</div>
  );
};

const sendAPI = () => {
  // ajax 또는 axios를 이용하여 rest api 코드를 작성하는 부분
  // 지금은 3초 뒤에 데이터를 리턴하는 코드로 대신함
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({title: "게시판제목"});
    }, 3000); // 3초 후에 resolve함수를 호출함
  });
};

export default Example3;