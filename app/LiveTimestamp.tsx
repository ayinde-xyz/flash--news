"use client";
import React from "react";
import TimeAgo from "react-timeago";
type Props = {
  time: string;
};

const LiveTimeStamp = ({ time }: Props) => {
  return <TimeAgo date={time} />;
};

export default LiveTimeStamp;
