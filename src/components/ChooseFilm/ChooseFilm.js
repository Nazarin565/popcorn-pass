import React from "react";
import {
  Wrapper,
  Container,
  ButtonsWrapper,
  StyledButton,
  StyledH5,
  CurrentDate,
  DescriptionWrapper,
  StyledH6,
  FilmDescription,
} from "./ChooseFilm.styles";
import { useNavigate, useSearchParams } from "react-router";
import dayjs from "dayjs";

const availiableTimes = ["10:00", "12:00", "14:00", "16:00", "18:00", "20:00"];

const ChooseFilm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const date = searchParams.get("date") || dayjs().format("MMMM D");

  const handleChooseTime = (selectedTime) => {
    searchParams.set("time", selectedTime);

    navigate({
      pathname: "choose-places",
      search: searchParams.toString(),
    });
  };

  return (
    <Container id="choose-film">
      <StyledH5>
        In the cinema on <CurrentDate>{date}</CurrentDate>
      </StyledH5>
      <Wrapper>
        <DescriptionWrapper>
          <StyledH6>Here will be film name</StyledH6>
          <ButtonsWrapper>
            {availiableTimes.map((time) => (
              <StyledButton key={time} onClick={() => handleChooseTime(time)}>
                {time}
              </StyledButton>
            ))}
          </ButtonsWrapper>
          <FilmDescription>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora id
            iure vero nisi, est pariatur distinctio iusto molestias consequuntur
            sunt doloremque doloribus ea quisquam! Enim, tenetur architecto
            soluta quasi consequatur aliquid! Ipsa et illum earum voluptate eius
            neque sunt nesciunt nam amet sit animi, minima ea fugit culpa
            architecto autem corporis necessitatibus quis veniam accusantium?
            Non nobis, beatae excepturi aperiam aliquid facere voluptate vitae
            delectus? Saepe, animi ipsa enim nostrum inventore fuga quibusdam
            nulla quis cupiditate facere cumque consequuntur atque quisquam
            reprehenderit odit distinctio non assumenda cum quod aliquam aut
            odio mollitia sequi ut. Cum repellendus corrupti deleniti laudantium
            officiis.
          </FilmDescription>
        </DescriptionWrapper>
        <img src="https://via.placeholder.com/200x300" alt="" />
      </Wrapper>
      <Wrapper>
        <DescriptionWrapper>
          <StyledH6>Here will be film name</StyledH6>
          <ButtonsWrapper>
            {availiableTimes.map((time) => (
              <StyledButton key={time}>{time}</StyledButton>
            ))}
          </ButtonsWrapper>
          <FilmDescription>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora id
            iure vero nisi, est pariatur distinctio iusto molestias consequuntur
            sunt doloremque doloribus ea quisquam! Enim, tenetur architecto
            soluta quasi consequatur aliquid! Ipsa et illum earum voluptate eius
            neque sunt nesciunt nam amet sit animi, minima ea fugit culpa
            architecto autem corporis necessitatibus quis veniam accusantium?
            Non nobis, beatae excepturi aperiam aliquid facere voluptate vitae
            delectus? Saepe, animi ipsa enim nostrum inventore fuga quibusdam
            nulla quis cupiditate facere cumque consequuntur atque quisquam
            reprehenderit odit distinctio non assumenda cum quod aliquam aut
            odio mollitia sequi ut. Cum repellendus corrupti deleniti laudantium
            officiis.
          </FilmDescription>
        </DescriptionWrapper>
        <img src="https://via.placeholder.com/200x300" alt="" />
      </Wrapper>
    </Container>
  );
};

export default ChooseFilm;
