/* global process */

/*****************************************************************************/

export function clock (start) {
  if (start) {
    const end = process.hrtime (start);
    return (end[0] * 1000) + (end[1] / 1000000);
  } else {
    return process.hrtime ();
  }
}

/*****************************************************************************/
