let firstMenu = null;

export function mapMenuToRouter(userMenu) {
  //默认先加载所有的路由
  const routes = [];
  const allRouter = [];
  const routerFiles = require.context("../router/main", true, /\.js/);
  routerFiles.keys().forEach((key) => {
    const route = require("../router/main" + key.split(".")[1]);
    allRouter.push(route.default);
  });

  //更具菜单获取 rouutes
  // eslint-disable-next-line no-unused-vars
  const _recurseGetRouter = (userMenu) => {
    if (userMenu.left !== 0) {
      for (const menu of userMenu) {
        console.log(menu);
        if (menu.type === 2) {
          const route = allRouter.find((route) => route.path === menu.url);
          if (route) routes.push(route);
          if (!firstMenu) {
            firstMenu = menu;
          }
        } else {
          _recurseGetRouter(menu.children);
        }
      }
    }
  };
  _recurseGetRouter(userMenu);
  return routes;
}

export function pathMapToMenu(userMenu, currentPath) {
  console.log(currentPath);
  for (const menu of userMenu) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath);
      if (findMenu) {
        return findMenu;
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu;
    }
  }
}
export { firstMenu };
