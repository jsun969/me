// 浏览器标题切换
const OriginTitle = document.title; // 保存之前页面标题
let titleTime;
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    document.title = '看这里!看这里!';
    titleTime = setTimeout(() => {
      document.title = OriginTitle;
    }, 3000); // 3秒后恢复原标题
  } else {
    document.title = '你回来啦!';
    titleTime = setTimeout(() => {
      document.title = OriginTitle;
    }, 500); // 0.5秒后恢复原标题
  }
});
