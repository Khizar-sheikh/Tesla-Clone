import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import image1 from "../images/game.jpg"
import image2 from "../images/connected.jpg"
import image3 from "../images/audio.jpg"

const Section = styled.div`
  object-fit: contain;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  scroll-snap-align: start;
  color: black;

  @media (max-width: 768px) {
  display: none;
  }
`;

const Row = styled.div`
    height: 33%;
    display: flex;
    justify-content: space-evenly;
    align-items: center
`;

const Image = styled.img`
width: 40vw;
    object-fit: cover;
    height: 33vh;
`;

const Text = styled.p`
  flex: 0.5;
  padding: 20px;
  font-weight: bolder;
  font-size: 13px;
`;

const ParaHeading = styled.h4`
  font-size: small;
  font-weight: bolder;
  text-align: left;
`;

const Section2 = () => {
    return (
        <Section>
            <Row>
                <Fade bottom>
                    <Image src={image1} alt="Left Image" />
                </Fade>
                <Text>
                    <ParaHeading>Game from Anywhere</ParaHeading>
                    Upto 10 teraflops of processing power enables in-car gaming on-par with today&apos;s newest consoles. Wireless
                    Controller Compatibility lets you game from any seat.
                </Text>

            </Row>

            <Row>
                <Text>
                    <ParaHeading>Stay Connected</ParaHeading>
                    Upto 10 teraflops of processing power enables in-car gaming on-par with today&apos;s newest consoles. Wireless
                    Controller Compatibility lets you game from any seat.
                </Text>
                <Fade bottom>
                    <Image src={image2} alt="Left Image" />
                </Fade>
            </Row>

            <Row>
                <Fade bottom>
                    <Image src={image3} alt="Left Image" />
                </Fade>
                <Text>
                    <ParaHeading>Your Best Audio System</ParaHeading>
                    Upto 10 teraflops of processing power enables in-car gaming on-par with today&apos;s newest consoles. Wireless
                    Controller Compatibility lets you game from any seat.
                </Text>
            </Row>
        </Section>
    );
};

export default Section2;
