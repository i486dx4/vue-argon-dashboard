// import bootstrap from "bootstrap/dist/js/bootstrap";
//
// // initialization of Tooltips
// export default function setTooltip() {
//   var tooltipTriggerList = [].slice.call(
//     document.querySelectorAll('[data-bs-toggle="tooltip"]'),
//   );
//   // eslint-disable-next-line no-unused-vars
//   var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//     return new bootstrap.Tooltip(tooltipTriggerEl);
//   });
// }


import * as bootstrap from "bootstrap";
import { Tooltip } from 'bootstrap'; // Import the Tooltip type

// Initialization of Tooltips
export default function setTooltip(): void {
  const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  ) as HTMLElement[]; // Explicitly type the NodeList as an array of HTMLElements

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const tooltipList: Tooltip[] = tooltipTriggerList.map((tooltipTriggerEl) => {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
}
