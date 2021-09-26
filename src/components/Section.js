import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Section = ({
  title,
  description,
  backgroundImg,
  leftBtnText,
  rightBtnText,
}) => {
  return (
    <Wrap backgroundImg={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Button>
        <Fade bottom>
          <ButtonGroup>
            <BtnLeft>{leftBtnText}</BtnLeft>
            {rightBtnText && <BtnRight>{rightBtnText}</BtnRight>}
          </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg" />
      </Button>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  width: 100wh;
  height: 100vh;
  background-image: ${(props) => `url(/images/${props.backgroundImg})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
`;

const Button = styled.div``;

const ButtonGroup = styled.div`
  display: flex;
  /* margin-bottom: 30px; */
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const BtnLeft = styled.div`
  background-color: black;
  opacity: 0.85;
  color: white;
  text-transform: uppercase;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 240px;
  border-radius: 100px;
  margin: 8px;
  cursor: pointer;
`;

const BtnRight = styled(BtnLeft)`
  background-color: white;
  color: black;
  opacity: 0.65;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  /* overflow-y: hidden; */
`;
