import request from "./request";

// 获取留言列表
export const reqGetMessageList = () => {
  return request({
    url: "/getMessageList",
    method: "get",
  });
};
// 留言
export const reqSetMessage = (data) => {
  // console.log(data);
  return request({
    url: "/setMessage",
    method: "post",
    data,
  });
};
// 获取文章列表
export const reqGetArticleList = () => {
  return request({
    url: "/getArticleList",
    method: "get",
  });
};
// 获取文章列表分页
export const reqGetArticleListByPage = (data) => {
  return request({
    url: "/getArticleListByPage",
    method: "post",
    data,
  });
};
// 获取留言列表分页
export const reqGetMessageListByPage = (data) => {
  return request({
    url: "/getMessageListByPage",
    method: "post",
    data,
  });
};
// 获取文章详情
export const reqGetArticleDetail = (title) => {
  return request({
    url: `/getArticleDetail?title=${title}`,
    method: "get",
  });
};
