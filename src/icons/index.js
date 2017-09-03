import React from 'react'

export const VoteUp = (props) => {
  return (
    <span onClick={props.clickHandler}>
      vote up
    </span>
  )
};

export const VoteDown = (props) => {
  return (
    <span onClick={props.clickHandler}>vote down</span>
  )
};
