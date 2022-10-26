export const getUser = () => {
  return localStorage.getItem("_blog_user");
};
export const setUser = (user) => {
  localStorage.setItem("_blog_user", user);
};
export const timeHandler = (time) => {
  time = new Date(time);
  const curTime = new Date();
  const num = Math.floor((curTime.getTime() - time.getTime()) / 1000);
  const seconds = num % 60;
  const minutes = Math.floor(num / 60);
  const hours = Math.floor(num / 3600);
  const days = Math.floor(num / (3600 * 24));
  if (days && days < 7) {
    return days + "天前";
  }else if (!days&&hours) {
    return hours + "小时前";
  } else if (minutes&&!hours) {
    return minutes + "分钟前";
  } else if (!minutes) {
    return seconds + "秒前";
  } else {
    return (
      time.getFullYear() +
      "-" +
      ("0" + (time.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + time.getDate()).slice(-2) +
      " " +
      ("0" + time.getHours()).slice(-2) +
      ":" +
      ("0" + time.getMinutes()).slice(-2) +
      ":" +
      ("0" + time.getSeconds()).slice(-2)
    );
  }
  
};
