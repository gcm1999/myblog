import request from "./request";

export const reqGetMessageList = () => {
  return request({
    url: "/getMessageList",
    method: "get",
  });
};
export const reqSetMessage = (data) => {
  // console.log(data);
  return request({
    url: "/setMessage",
    method: "post",
    data,
  });
};
