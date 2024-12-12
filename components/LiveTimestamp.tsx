"use client";
import React from "react";
import ReactTimeago from "react-timeago";
type Props = {
  time: string;
};

const LiveTimeStamp = ({ time }: Props) => {
  return (
    <>
      <ReactTimeago date={time} />
    </>
  );
};

export default LiveTimeStamp;
