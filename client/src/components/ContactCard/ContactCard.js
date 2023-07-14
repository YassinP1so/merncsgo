import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { deleteContact } from "../../JS/Actions/contact";

const ContactCard = ({contact}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
  return (
    <div>
      <Card sx={{ maxWidth: 400 ,width : 300  ,mb:"6%" , height : "410px" , marginLeft : "40px"  }}>
        <CardMedia
          sx={{ height: 200 }}
          image={contact.profile_img}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{fontFamily : "fantasy" , fontSize : "25px"}}>
            {contact.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{fontSize : "20px"}}>
            {contact.email}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{color : "green" , fontSize : "19px"}}>
          {contact.phone}
        </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" color="success" onClick={()=> navigate(`/EditContact/${contact._id}`)} >Edit</Button>
          <Button size="small" color="error" variant="contained" onClick={()=>dispatch(deleteContact(contact._id))} >Delete <DeleteOutlineIcon sx={{color : "white"}}/> </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ContactCard;