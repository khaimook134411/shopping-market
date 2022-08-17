import React from "react";
import Loading from "../loading/Loading";

type CommonFeedbackProps = { children: React.ReactNode };

export default function CommonFeedback(props: CommonFeedbackProps) {
  return (
    <div id="commonFeedback">
      {/* <Loading /> */}
      {props.children}
    </div>
  );
}
