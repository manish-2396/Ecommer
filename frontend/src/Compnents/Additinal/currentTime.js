export const getCurrentTime = () => {
  let time = new Date().toTimeString().split(" ")[0].split(":");

  let Time = [];

  if (time[0] > 12) {
    let hr = time[0] - 12;
    let min = time[1] + "PM";
    Time.push(hr);
    Time.push(min);
  } else {
    let hr = time[0];
    let min = time[1] + "AM";
    Time.push(hr);
    Time.push(min);
  }

  let date = new Date().toDateString().split(" ");

  let current_date = "" + date[2] + " " + date[1] + " " + date[3];

  let current_time = Time.join(":");

  return { current_date, current_time };
};
