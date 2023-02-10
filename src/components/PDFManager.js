import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import 'react-pdf/dist/esm/Page/TextLayer.css';

/*function PDFManager() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file="StrixRules.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={1} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}
export default PDFManager   
*/
 function PDFManager() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <>
      <Document file="The Rules of Strix.pdf" onLoadSuccess={onDocumentLoadSuccess} >
        <Page    pageNumber={pageNumber} />
      </Document>

      <div>
        <p>
          Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
        </p>
        
        <button  type="button" disabled={pageNumber <= 1} onClick={previousPage} >
          Previous
        </button>

        <button  type="button" disabled={pageNumber >= numPages} onClick={nextPage} >
          Next
        </button>

      </div>
    </>
  );
}
export default PDFManager