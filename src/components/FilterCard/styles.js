import styled from 'styled-components';

export const Container = styled.div`
    width: 260px;
    height: 60px;
    padding: 10px;
    background: ${props => props.actived ? '#EE6B26' : '#20295F'};
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    cursor: pointer;

    img {
        width: 25px;
        height: 25px;
    }

    span {
        color: #fff;
        font-weight: bold;
        align-self: flex-end;
        font-size: 18px;
    }

    &:hover {
        background: #EE6B26;
        transition: .5s;
    }
`