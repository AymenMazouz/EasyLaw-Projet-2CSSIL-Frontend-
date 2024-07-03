/**
 * Converts a date string to a specified format.
 * @param dateStr - The date string to be converted.
 * @param format - The desired output format (e.g., "MM/DD/YYYY HH:MM:SS" or "YYYY-MM-DD HH:MM:SS").
 * @returns The formatted date string.
 */
function formatDateString(dateStr: string, format: string): string {
    // Parse the date string to a Date object
    const date = new Date(dateStr);
  
    // Function to pad single digit numbers with a leading zero
    function pad(number: number) {
      return number < 10 ? `0${number}` : number.toString();
    }
  
    // Extract date components
    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    const seconds = pad(date.getSeconds());
  
    // Replace format tokens with actual date values
    let formattedDate = format
      .replace("YYYY", year.toString())
      .replace("MM", month)
      .replace("DD", day)
      .replace("HH", hours)
      .replace("MM", minutes)
      .replace("SS", seconds);
  
    return formattedDate;
  }
  
  export {formatDateString}