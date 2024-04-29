import { Box, Button, Typography } from "@mui/material";
import PopUp from "components/PopUp";
import React from "react";
import { useSelector } from "react-redux";

export default function ConfirmPopUp({ friendId }) {
  const friends = useSelector((state) => state.user.friends);
  const isFriend = friends?.find((f) => f._id === friendId);
  return (
    <PopUp>
      {isFriend ? (
        <Box>
          <Typography>Would you like to remove this friend?</Typography>
          <Button>Yes</Button>
          <Button>No</Button>
        </Box>
      ) : (
        <Box>
          <Typography>
            Do you want to add this friend on your friend list?
          </Typography>
          <Button>Yes</Button>
          <Button>No</Button>
        </Box>
      )}
    </PopUp>
  );
}
