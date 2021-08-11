import React from "react";

const MyMessage = (props: MyMessageProps) => {
  return (
    <>
      <div>My message is: {props.message}</div>
      <button onClick={props.clickHandler}>Kuldeep</button>
    </>
  );
};

export default MyMessage;

interface MyMessageProps {
  message: string;
  clickHandler: () => void;
}
