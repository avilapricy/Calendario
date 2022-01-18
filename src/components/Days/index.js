import styled from "styled-components";
import Day from "../Day";

const Container = styled.div`
    padding: 53px 24px 0 24px;
    display: flex;
    gap: 16px;
    overflow-x: scroll;
    width: fit-content;
`

function Days (props) {
    return (
        <Container>
            <Day/>
            <Day/>
            <Day/>
            <Day/>
            <Day/>
            <Day/>
            <Day/>
        </Container>
    )
}
export default Days; 