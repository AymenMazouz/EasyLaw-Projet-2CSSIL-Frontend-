const routesAuthorization: Record<string, string[]> = {
  user: ["/search"],
  admin: ["/admin/dashboard", "/admin/users", "/admin/moderators"],
  moderator: ["/moderator/dashboard", "/moderator/users"],
};

export default routesAuthorization;
