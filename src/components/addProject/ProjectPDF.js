import { createRef } from "react";
import Pdf from "react-to-pdf";

const ref = createRef();

function ProjectPDF(props) {
  return (
    <>
      <div className="projectPdf" ref={ref}>
        <h1>{props.name}</h1>
        <h1>{props.prof}</h1>
      </div>
      <Pdf targetRef={ref} filename="contract.pdf" scale={2}>
        {({ toPdf }) => <button onClick={toPdf}>Download PDF</button>}
      </Pdf>
    </>
  );
}

export default ProjectPDF;
