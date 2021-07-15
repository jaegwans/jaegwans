import React, {useEffect,useState} from 'react';
import PostEle from '../components/PostEle';
import { Link } from 'react-router-dom';
import "./ListPage.css";
import CommonTable from '../components/table/CommonTable';
import CommonTableColumn from '../components/table/CommonTableColumn';
import CommonTableRow from '../components/table/CommonTableRow';
import { postList } from '../data';

function ListPage(props) {

    const [dataList,setDataList]=useState([]);

    useEffect(() => {
        setDataList(postList);
        // getMovies= async ()=>{
        //     const {data:{data:{movies}}} = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
        //     this.setState({movies : movies,isLoading:false});
        //   }
    }, []);

    return (
        <>
      <CommonTable headersName={['글번호', '제목', '등록일', '조회수']}>
        {
          dataList ? dataList.map((item, index) => {
            return (
              <CommonTableRow key={index}>
                <CommonTableColumn>{ item.no }</CommonTableColumn>
                <CommonTableColumn> <Link clsaaName="toDetail" to={`/Detail/${item.no}`}>{ item.title }</Link></CommonTableColumn>
                <CommonTableColumn>{ item.createDate }</CommonTableColumn>
                <CommonTableColumn>{ item.readCount }</CommonTableColumn>
              </CommonTableRow>
            )
          }) : ''
        }
      </CommonTable>
    </>
    )
}

export default ListPage
