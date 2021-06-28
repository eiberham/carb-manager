import moment from "moment";

/**
 * Converts kilojoules to calories energy unit
 * @param {number} kJ
 * @returns {number}
 */
export const kJtoCal = kJ => kJ * 4.184;

/**
 * Formats time to hh:mm if minutes is greater than 60.
 * @param {number} minutes -
 * @returns {number}
 */
export const formatTime = minutes =>
  minutes > 60
    ? moment
        .utc(moment.duration(minutes, "minutes").asMilliseconds())
        .format("h [h]r mm [m]in")
    : minutes + " min";
