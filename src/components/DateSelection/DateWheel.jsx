import React from "react";
import Button from "react-bootstrap/Button";

function DateWheel(props) {
  const centerDate = props.date;
  const leftDate = new Date(centerDate);
  leftDate.setTime(leftDate.getTime() - 1 * 86400000);
  const leftDate2 = new Date(centerDate);
  leftDate2.setTime(leftDate2.getTime() - 2 * 86400000);
  const rightDate = new Date(centerDate);
  rightDate.setTime(rightDate.getTime() + 1 * 86400000);
  const rightDate2 = new Date(centerDate);
  rightDate2.setTime(rightDate2.getTime() + 2 * 86400000);
  return (
    <div>
      <div>
        <Button
          variant="outline-primarys"
          onClick={() => props.onClick(leftDate2)}
        >
          {leftDate2.getDate()}
        </Button>
        <Button
          variant="outline-primarys"
          onClick={() => props.onClick(leftDate)}
        >
          {leftDate.getDate()}
        </Button>
        <Button
          variant="outline-primarys"
          onClick={() => props.onClick(centerDate)}
        >
          {centerDate.getDate()}
        </Button>
        <Button
          variant="outline-primarys"
          onClick={() => props.onClick(rightDate)}
        >
          {rightDate.getDate()}
        </Button>
        <Button
          variant="outline-primarys"
          onClick={() => props.onClick(rightDate2)}
        >
          {rightDate2.getDate()}
        </Button>
      </div>
      {centerDate.toISOString().slice(0, 10)}
    </div>
  );
}

export default DateWheel;
