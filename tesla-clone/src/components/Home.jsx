import styled from "styled-components";
import Section from "./Section";
import modelS from "../images/model-s.jpg"
import modelY from "../images/model-y.jpg"
import model3 from "../images/model-3.jpg"
import modelX from "../images/model-x.jpg"
import solarPanel from "../images/solar-panel.jpg"
import solarRoof from "../Images/solar-roof.jpg"
import Accessories from "../images/solar-roof.jpg"
import Section2 from './Sectionlast';

function Home() {
    return (
        <Container>
            <Section
                id="Model-S"
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImage={modelS}
                leftButtonText="Custom Order"
                rightButtonText="Existing Inventory"
                showDownArrow
            />
            <Section
                title="Model Y"
                id="Model-Y"
                description="Order Online for Touchless Delivery"
                backgroundImage={modelY}
                leftButtonText="Custom Order"
                rightButtonText="Existing Inventory"
            />
            <Section
                title="Model 3"
                id="Model-3"
                description="Order Online for Touchless Delivery"
                backgroundImage={model3}
                leftButtonText="Custom Order"
                rightButtonText="Existing Inventory"
            />
            <Section
                title="Model X"
                id="Model-X"
                description="Order Online for Touchless Delivery"
                backgroundImage={modelX}
                leftButtonText="Custom Order"
                rightButtonText="Existing Inventory"
            />
            <Section2 />
            <Section
                title="Solar Panels"
                description="Lowest Cost Solar Panels in America"
                backgroundImage={solarPanel}
                leftButtonText="Order Now"
                rightButtonText="Learn More"
            />
            <Section
                title="Solar Roof"
                description="Produce Clean Energy From Your Roof"
                backgroundImage={solarRoof}
                leftButtonText="Order Now"
                rightButtonText="Learn More"
            />
            <Section
                title="Accessories"
                description=""
                backgroundImage={Accessories}
                leftButtonText="Shop Now"
            />


        </Container>
    );
}

export default Home;
const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  overflow-x: hidden;
`;