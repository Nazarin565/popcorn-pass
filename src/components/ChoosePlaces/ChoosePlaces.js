import { Box, Button, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Seat, StyledBoxModal } from "./ChoosePlaces.styles";
import { seats } from "../../utils/constants";

const ChoosePlaces = ({ openModal, handleCloseModal }) => {
  const [chosenSeats, setChosenSeats] = useState([]);

  useEffect(() => {
    setChosenSeats([]);
  }, []);

  const toogleChooseSeat = (seatId) => {
    setChosenSeats((prev) => {
      if (prev.includes(seatId)) {
        return prev.filter((id) => id !== seatId);
      }
      return [...prev, seatId];
    });
  };

  console.log(chosenSeats);

  return (
    <Modal open={true} onClose={handleCloseModal}>
      <StyledBoxModal>
        <Typography variant="h5" textAlign={"center"}>
          "Film name here" on January 7, {openModal}
        </Typography>
        <Box border={1} py={3} px={20}>
          Screen
        </Box>
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          gap={2}
          justifyContent={"center"}
        >
          {seats.map((seat) => {
            const isChosen = chosenSeats.includes(seat.id);

            return (
              <Seat
                key={seat.id}
                isReserved={seat.isReserved}
                isChosen={isChosen}
                onClick={() => toogleChooseSeat(seat.id)}
              >
                {seat.name}
              </Seat>
            );
          })}
        </Box>

        {!!chosenSeats.length && (
          <Box border={1} p={1}>
            <Typography sx={{ textAlign: "center" }}>Your order:</Typography>

            <Box display={"flex"} gap={1} flexWrap={"wrap"}>
              {chosenSeats.map((seat) => (
                <Typography key={seat} sx={{ border: 1, p: 1 }}>
                  Seat {seat}
                </Typography>
              ))}
            </Box>
          </Box>
        )}

        <Button
          variant="contained"
          disabled={!chosenSeats.length}
          onClick={() => {
            alert("Success!");
            handleCloseModal();
          }}
        >
          Order
        </Button>
      </StyledBoxModal>
    </Modal>
  );
};

export default ChoosePlaces;
