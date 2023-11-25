import { useState, useEffect } from 'react';
import { getRecipi } from '../service/api/apiData'
import Card from '../component/card';
import Nav from '../component/nav';

function Data() {
 const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await getRecipi();
      const finalData = response.data.data.children
      setData(finalData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    < >
    <Nav/>
    <Card data={data}/>
    </>
  );
}

export default Data;


