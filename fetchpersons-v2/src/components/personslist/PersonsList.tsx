import React,{ useEffect, useState }from 'react';
import PersonsType from '../../interface/Personsdata.interface';
import axios from 'axios';
import { Grid } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { error } from 'console';
import { Box } from '@mui/system';
import './ImageGrid.style.scss';
const PersonsList=()=>{
    const [users, setUserList] = useState<PersonsType[]>([]);
    const fetchPost = async () => {
    const response = await axios("https://reqres.in/api/users")
       setUserList(response.data.data)
    }
    useEffect(() => {
      fetchPost();
     }, []);
     return(
     <ImageList className='img-list'>
      {users.map((item) => (
        <Box
   
        borderColor="primary.main"
        className='img-box'>
        <ImageListItem key={item.avatar}>
        <img
           src={`${item.avatar}?w=14&h=14`}
           srcSet={`${item.avatar}?w=14&h=14&dpr=1 1x`}
          alt={item.email}
           loading="lazy"
           className='imglist-item'
        />
        <ImageListItemBar
            title={item.first_name}
            position="below"
            style={{alignContent:'center'}}
          />
          <ImageListItemBar
            title={item.last_name}
            position="below"
            style={{alignContent:'center'}}
          />
          <ImageListItemBar
            subtitle={<span>{item.email}</span>}
            position="below"
            style={{alignContent:'center'}}
          />
        </ImageListItem>
        </Box>
      ))}
    </ImageList>
     );
  }
  export default PersonsList;
