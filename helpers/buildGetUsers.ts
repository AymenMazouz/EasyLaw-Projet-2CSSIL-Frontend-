function buildGetUsersRequest({
  active,
  role,
  lastname,
  firstname,
  email,
}: {
  active: boolean | undefined;
  role: string;
  lastname: string | undefined;
  firstname: string | undefined;
  email: string | undefined;
}): string {
  return `/users/?role=${role}${
    active !== undefined ? `&active=${active}` : ""
  }${lastname !== undefined ? `&lastname=${lastname}` : ""}${
    firstname !== undefined ? `&firstname=${firstname}` : ""
  }${email !== undefined ? `&email=${email}` : ""}`;
}

export default buildGetUsersRequest;
