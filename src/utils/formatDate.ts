export function formatDate(date: number) {
    let seconds = Math.floor((Number(new Date()) - date * 1000) / 1000);
    let interval = seconds / 31536000;
    let result = 0;

    if (interval > 1) {
      result = Math.floor(interval); 
      return result === 1 ? result + " year" : result + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      result = Math.floor(interval); 
      return result === 1 ? result + " month" : result + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
     result = Math.floor(interval); 
      return result === 1 ? result + " day" : result + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      result = Math.floor(interval); 
      return result === 1 ? result + " hour" : result + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
       result = Math.floor(interval); 
      return result === 1 ? result + " minute" : result + " minutes";
    }
    result = Math.floor(interval); 
    return result === 1 ? result + " second" : result + " seconds";
}