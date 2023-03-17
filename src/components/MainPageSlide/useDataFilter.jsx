import React, { useEffect, useState } from 'react';
import { useReadData } from '../../utils/firebase/index';

export default function useDataFilter() {
  const [filterTest, setfilterTest] = useState([]);

  const { readData, data, isLoading, error } = useReadData('image');
  async function handleReadData() {
    // 모든 데이터를 가져옵니다.
    await readData();

    // 또는 특정 도큐멘트 데이터만 가져옵니다.
    await readData();
  }
  // 필요한 데이터만 뽑기
  useEffect(() => {
    readData();
    const result = data?.filter(ele => ele.src.slide);
    setfilterTest(result);
  }, []);

  return filterTest;
}
