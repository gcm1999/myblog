export const getUser = () => {
  return localStorage.getItem("_blog_user");
};
export const setUser = (user) => {
  localStorage.setItem("_blog_user", user);
};
export const timeHandler = (time) => {
  time = new Date(time);
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
};
