import axios from "axios";
import React, { useEffect, useState } from "react";

const SendAPI = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .than((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("데이터 가져오기 실패: ", error);
      });
  }, []);
  return (
    <div>
      {loading ? (
        <p>로딩중...</p>
      ) : (
        <>
          <p> 타이틀 : {data.title}</p>
          <p> ID : {data.id}</p>
          <p> User ID : {data.userId}</p>
          <p> 완료여부 : {data.completed}</p>
        </>
      )}
    </div>
  );
};

export default SendAPI;
