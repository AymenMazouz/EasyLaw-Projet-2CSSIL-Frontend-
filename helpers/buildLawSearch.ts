
function buildLawSearchQuery(
    search_query: string | undefined,
    field: string | undefined,
    ministry: string | undefined,
    text_number: string | undefined,
    text_type: string | undefined,
    date_range: { from: string | undefined; to: string | undefined },
    signature_date_range: { from: string | undefined; to: string | undefined },
    page: number
) {
    return `http://localhost:5000/laws/search?page=${page}&per_page=9${search_query !== undefined ? `&search_query=${search_query}` : ""
        }${field !== undefined ? `&field=${field}` : ""
        }${ministry !== undefined
            ? `&ministry=${ministry} `
            : ""
        }${text_number !== undefined
            ? `&text_number=${text_number} `
            : ""
        }${text_type !== undefined
            ? `&text_type=${text_type} `
            : ""
        }${date_range?.from !== undefined ? `&journal_start_date=${date_range.from}` : ``}${date_range?.to !== undefined ? `&journal_end_date=${date_range.to}` : ``
        }${signature_date_range?.from !== undefined ? `&signature_start_date=${signature_date_range.from}` : ``}${signature_date_range?.to !== undefined ? `&signature_end_date=${signature_date_range.to}` : ``
        }`;
}

function buildLawSearchLink(
    search_type: string | undefined,
    search_query: string | undefined,
    field: string | undefined,
    ministry: string | undefined,
    text_number: string | undefined,
    text_type: string | undefined,
    date_range: { from: string | undefined; to: string | undefined },
    signature_date_range: { from: string | undefined; to: string | undefined },
) {
    console.log({
        search_type,
        search_query,
        field,
        ministry,
        text_number,
        text_type,
        date_range,
        signature_date_range
    });
    return `/search?search_type=${search_type}${search_query !== undefined ? `&search_query=${search_query}` : ""
        }${field !== undefined ? `&field=${field}` : ""
        }${ministry !== undefined ? `&ministry=${ministry}` : ""
        }${text_number !== undefined ? `&text_number=${text_number}` : ""
        }${text_type !== undefined ? `&text_type=${text_type}` : ""
        }${date_range?.from !== undefined ? `&journal_start_date=${date_range.from}` : ``
        }${date_range?.to !== undefined ? `&journal_end_date=${date_range.to}` : ``
        }${signature_date_range?.from !== undefined ? `&signature_start_date=${signature_date_range.from}` : ``
        }${signature_date_range?.to !== undefined ? `&signature_end_date=${signature_date_range.to}` : ``
        }`;
}

export { buildLawSearchQuery, buildLawSearchLink };
