import routesAuthorization from "@config/routesAuthorization";

const authorization = {
  isProtectedRoute(pathname: string): boolean {
    const isProtectedRoute = Object.values(routesAuthorization).some((routes) =>
      routes.includes(pathname)
    );
    return isProtectedRoute;
  },

  isUserAuthorized(userRole: string | undefined, pathname: string): boolean {
    const authorizedRoutes = routesAuthorization[userRole || ""];
    const isAuthorized = authorizedRoutes?.includes(pathname) || false;
    return isAuthorized;
  },

  isAuthRoute(pathname: string): boolean {
    return /^\/auth\/(login|register)($|\/)/.test(pathname);
  },
};

export default authorization;
