import styled from 'styled-components'

const Container = styled.div`
    height:100vh;
    display:flex;
    flex-direction:column;
`;

const MarketPlace = () => {
    return(
        <Container>
            <iframe
                title="OpenseaApi" 
                src='https://testnets.opensea.io/collection/kale?embed=true'
                width='100%'
                height='100%'
                frameborder='0'
                allowFullScreen>
            </iframe>
        </Container>
    )
}

export default MarketPlace;