import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
const Container = styled.div`
      progress{
          margin-right:8px;
      }

      progress[value] {
          width: ${props => props.width};
          -webkit-appearance:none;
          appearance: none;
      }

      progress[value]::-webkit-progress-bar{
          height:10px;
          border-radius:20px;
          background-color:#eee;
      }
      progress[value]::-webkit-progress-value{
          height:10px;
          border-radius:20px;
          background-color:${props => props.color};
          transition: 1s ease 0.3s;
      }
      margin-bottom:10px;
      margin-left:10px;
      margin-top:10px;
`;

const Progress = ({ value, max, color, width }) => {
  return (
    <Container color={color} width={width}>
    <progress value={value} max={max}/>
    </Container>
  )
};

Progress.propTypes = {
    value: PropTypes.number.isRequired,
    max: PropTypes.number,
    color:PropTypes.string,
    width:PropTypes.string,
}

Progress.defaultProps = {
    max:100,
    color: "lightBlue",
    width:"250px"
};

export default Progress
