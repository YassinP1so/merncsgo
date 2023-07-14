import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../../JS/Actions/contact";
import CircularProgress from "@mui/material/CircularProgress";
import ContactCard from "../../components/ContactCard/ContactCard";
import './ListContact.css'
const ListContact = () => {
  const dispatch = useDispatch();
  const listContacts = useSelector(
    (state) => state.contactReducer.listContacts
  );
  const load = useSelector((state) => state.contactReducer.load);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div>
      
      <div style={{display : "flex" , flexDirection : "row" , gap : "20px" , flexWrap : "wrap" , marginLeft : "30px" , marginTop : "10px" }} >
      {load ? (
        <CircularProgress
          sx={{
            color: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            m: "auto",
            mb: "45%",
          }}
          size="3.5rem"
        />
      ) : (
        listContacts.map((el) => <ContactCard contact={el} key={el._id} />)
      )}
      </div>
    </div>
  );
};

export default ListContact;
