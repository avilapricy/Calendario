import styled from "styled-components";

const Container = styled.div`
 background: #05C7F0;
 height: 82px;
 display: flex;
 justify-content: center;
 align-items: center;
`

const Button = styled.div`
 color: #F8FBFC;
 font-size: 30px;
`

const Title = styled.div`
 color: #F8FBFC;
 font-size: 30px;

`

function Header (props) {
    return (
        <Container>
            <Button style={{marginRight: '153px'}}> 
               { "<" } 
            
            </Button>

            <Title>
                17-23
            </Title>

            <Button style={{marginLeft: '153px'}}>
               { ">" }
            </Button>
        </Container>
    )
}
export default Header;