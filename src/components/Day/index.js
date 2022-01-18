import styled from "styled-components";
import Card from "../Card";

const Container = styled.div`
background: #E8F3F5;
height: 610px;
width: 212px;
border-radius: 20px;
`
const Title = styled.div`
    color: #08829C;
    font-size: 30px;
`

const Name = styled.div`
    color: #000000;
    font-size: 10px;
`
const Header = styled.div`
    padding: 6px;    
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Scroll = styled.div`
    padding: 12px;
`

function Day (props) {
    return (
        <Container>
            <Header> 
                <Title>
                    17
                </Title>

                <Name>
                    Segunda-Feira
                </Name>
            </Header>
            <Scroll>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Scroll>
        </Container>

    )
}
export default Day;