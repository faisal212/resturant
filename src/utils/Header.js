
import React from 'react'
import styled from 'styled-components';

function HomeHeader({ img, children }) {
    return (
        <IndexHeader img={img}>
            {children}
        </IndexHeader>
    )
}
function PageHeader({ img, children }) {
    return (
        <DefaultHeader img={img}>
            {children}
        </DefaultHeader>
    )
}

const IndexHeader = styled.header`
    min-height: calc(100vh - 54.78px);
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${props => props.img}) center/cover fixed no-repeat;
    display:flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`;
const DefaultHeader = styled(IndexHeader)`
    min-height: 60vh;
`;


export { HomeHeader, PageHeader };
