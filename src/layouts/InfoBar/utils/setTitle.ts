import { routes } from "layouts/SideBar/sidebar.data";

export const setTitle = (pathname: string): string => {
  if (pathname.lastIndexOf("/") !== 0) {
    const slicedTitle = pathname.slice(0, pathname.lastIndexOf("/"));
    const numberOf = pathname.slice(-1);
    const title = routes
      .filter((route) => route.path === slicedTitle)[0]
      .title.replace("ы" || "и", "a");
    return `${title} ${numberOf}`;
  }

  return routes.filter((route) => route.path === pathname)[0].title;
};
