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
// 关键字获取文章列表分页
export const reqGetArticleListByKeywordByPage = (data) => {
  return request({
    url: "/getArticleListByKeywordByPage",
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
// 添加文章
export const reqSetArticle = (data) => {
  return request({
    url: "/setArticle",
    method: "post",
    data,
  });
};
// 获取评论
export const reqGetCommentList = (title) => {
  return request({
    url: "/getCommentList?title="+title,
    method: "get",
  });
};
// 添加评论
export const reqSetComment = (data) => {
  return request({
    url: "/setComment",
    method: "post",
    data
  });
};
