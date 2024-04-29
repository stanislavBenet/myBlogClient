import { Box, Typography, useTheme } from "@mui/material";
import Friend from "components/Friends";
import WidgetWrapper from "components/WidgetWrapper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "state";

const FriendListWidget = ({ userId }) => {
  const dispatch = useDispatch();
  const { palette } = useTheme();
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);

  const getFriends = async () => {
    try {
      const response = await fetch(
        `http://localhost:3010/users/${userId}/friends`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch friends");
      }
      const data = await response.json();
      dispatch(setFriends({ friends: data }));
    } catch (error) {
      console.error("Error fetching friends:", error.message);
      // Handle error (e.g., display error message to user)
    }
  };

  useEffect(() => {
    getFriends();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <WidgetWrapper>
      <Typography
        color={palette.neutral.dark}
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1.5rem" }}
      >
        Friend List
      </Typography>

      <Box display="flex" flexDirection="column" gap="1.5rem">
        {friends?.length ? (
          friends.map(
            ({ _id, firstName, lastName, occupation, picturePath }) => (
              <Friend
                key={_id}
                friendId={_id}
                name={`${firstName} ${lastName}`}
                subtitle={occupation}
                userPicturePath={picturePath}
              />
            )
          )
        ) : (
          <Typography color={palette.text.secondary}>Loading...</Typography>
        )}
      </Box>
    </WidgetWrapper>
  );
};

export default FriendListWidget;
