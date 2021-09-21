import * as S from './styles';
import {Heading} from "../../components/Heading";
import {Base} from '../Base'
import {mockBase} from "../Base/stories";
import {useEffect, useState} from "react";
import {mapData} from "../../api/map-data";
import {PageNotFound} from "../PageNotFound";
import {Loading} from "../Loading";

function Home() {

  const [data, setData ]= useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetch('http://localhost:1337/pages/?slug=landing-page');
        const json = await data.json();
        const pageData = mapData(json);
        setData(pageData[0]);

      }catch (e) {
        setData(undefined);
      }
    }
    load();
  },[])

  if(data === undefined){
    return <PageNotFound/>
  }

  if(data && !data.slug){
    return <Loading/>
  }

  return <Base {...mockBase}></Base>
}

export default Home;
