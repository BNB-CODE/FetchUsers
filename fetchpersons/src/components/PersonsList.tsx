import React,{ useEffect, useState }from 'react';
import PersonsType from '../interface/Personsdata.interface';
import axios from 'axios';
import { Grid } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { error } from 'console';
import { Box } from '@mui/system';
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
     <ImageList sx={{ width: 1200, height: 560,paddingLeft:20,paddingBottom:2}} cols={3} rowHeight={100}>
      {users.map((item) => (
        <Box
        border={1}
        borderLeft={1}
        borderRight={1}
        borderColor="primary.main"
        sx={{ width: 200, height: 250}}>
        <ImageListItem key={item.avatar}>
        <img
           src={`${item.avatar}?w=14&h=14`}
           srcSet={`${item.avatar}?w=14&h=14&dpr=1 1x`}
          alt={item.email}
           loading="lazy"
           style={{ width: '130px', height:'130px',alignSelf: 'center',paddingTop: '10px'}}
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
