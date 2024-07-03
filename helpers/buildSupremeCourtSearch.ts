function buildSearchQuery(
  search_query: string | undefined,
  decision_number: string | undefined,
  date_range: { from: string | undefined; to: string | undefined },
  decision_subject: string | undefined,
  search_field: string | undefined,
  page: number
) {
  return `http://localhost:5000/supreme-court/search?page=${page}&per_page=9${
    search_query !== undefined ? `&search_query=${search_query}` : ""
  }${
    decision_number !== undefined ? `&decision_number=${decision_number}` : ""
  }${date_range?.from !== undefined ? `&start_date=${date_range.from}` : ``}${
    date_range?.to !== undefined ? `&end_date=${date_range.to}` : ``
  }${
    decision_subject !== undefined
      ? `&decision_subject=${decision_subject} `
      : ""
  }${search_field !== undefined ? `&search_field=${search_field}` : ""}`;
}

function buildSearchLink(
  search_type: string | undefined,
  search_query: string | undefined,
  decision_number: string | undefined,
  date_range: { from: string | undefined; to: string | undefined },
  decision_subject: string | undefined,
  search_field: string | undefined
) {
  console.log({
    search_type,
    search_query,
    decision_number,
    date_range,
    decision_subject,
    search_field,
  });
  return `/search?search_type=${search_type}${
    search_query !== undefined ? `&search_query=${search_query}` : ""
  }${
    decision_number !== undefined ? `&decision_number=${decision_number}` : ""
  }${date_range?.from !== undefined ? `&start_date=${date_range.from}` : ``}${
    date_range?.to !== undefined ? `&end_date=${date_range.to}` : ``
  }${
    decision_subject !== undefined
      ? `&decision_subject=${decision_subject}`
      : ""
  }${search_field !== undefined ? `&search_field=${search_field}` : ""}`;
}

export { buildSearchQuery, buildSearchLink };
