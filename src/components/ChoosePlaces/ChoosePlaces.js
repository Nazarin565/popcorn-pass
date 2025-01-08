import { Box, Button, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  ChoosenSeatsWrapper,
  Screen,
  Seat,
  SeatsWrapper,
  StyledBoxModal,
} from "./ChoosePlaces.styles";
import { seats } from "../../utils/constants";

const ChoosePlaces = ({ openModal, handleCloseModal, formattedDate }) => {
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

  const handleFinishOrder = () => {
    alert("Success!");
    handleCloseModal();
  };

  return (
    <Modal open={true} onClose={handleCloseModal}>
      <StyledBoxModal>
        <Typography variant="h5" textAlign={"center"}>
          "Film name here" on {formattedDate}, {openModal}
        </Typography>
        <Screen>Screen</Screen>
        <SeatsWrapper>
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
        </SeatsWrapper>

        {!!chosenSeats.length && (
          <Box border={1} p={1}>
            <Typography textAlign={"center"}>Your order:</Typography>

            <ChoosenSeatsWrapper>
              {chosenSeats.map((seat) => (
                <Typography key={seat} sx={{ border: 1, p: 1 }}>
                  Seat {seat}
                </Typography>
              ))}
            </ChoosenSeatsWrapper>
          </Box>
        )}

        <Button
          variant="contained"
          disabled={!chosenSeats.length}
          onClick={handleFinishOrder}
        >
          Reserve
        </Button>
      </StyledBoxModal>
    </Modal>
  );
};

export default ChoosePlaces;
