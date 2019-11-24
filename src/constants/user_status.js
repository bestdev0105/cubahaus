export const status = {
  init: "Init",
  applied: "Applied",
  interested: "Interested"
  //  interviewed: "Interviewed"
  // roomPreviewed: "Roompreviewed",
  // booked: "Booked",
  // info: "Info"
};

export const statusList = Object.keys(status).map(key => status[key]);

//export const finalStatus = statusList.indexOf(status.roomPreviewed);
export const finalStatus = statusList.indexOf(status.interested);
