function buildConseilSearchQuery(
    search_query: string | undefined,
    number: string | undefined,
    date_range: { from: string | undefined; to: string | undefined },
    chamber: string | undefined,
    section: string | undefined,
    procedure: string | undefined,
    subject: string | undefined,
    page: number
) {
    return `http://localhost:5000/conseil-etat/search?page=${page}&per_page=9${search_query !== undefined ? `&search_query=${search_query}` : ""
        }${number !== undefined ? `&number=${number}` : ""
        }${date_range?.from !== undefined ? `&start_date=${date_range.from}` : ``}${date_range?.to !== undefined ? `&end_date=${date_range.to}` : ``
        }${chamber !== undefined
        ? `&chamber=${chamber} `
            : ""
        }${section !== undefined
        ? `&section=${section} `
            : ""
        }${procedure !== undefined
        ? `&procedure=${procedure} `
            : ""
        }${subject !== undefined
        ? `&subject=${subject} `
            : ""
        }`;
}

function buildConseilSearchLink(
    search_type: string | undefined,
    search_query: string | undefined,
    number: string | undefined,
    date_range: { from: string | undefined; to: string | undefined },
    chamber: string | undefined,
    section: string | undefined,
    procedure: string | undefined,
    subject: string | undefined
) {
    console.log({
        search_type,
        search_query,
        number,
        date_range,
        chamber,
        section,
        procedure,
        subject,
    });
    return `/search?search_type=${search_type}${search_query !== undefined ? `&search_query=${search_query}` : ""
        }${number !== undefined ? `&number=${number}` : ""
        }${date_range?.from !== undefined ? `&start_date=${date_range.from}` : ``}${date_range?.to !== undefined ? `&end_date=${date_range.to}` : ``
        }${chamber !== undefined
        ? `&chamber=${chamber}`
            : ""
        }${section !== undefined ? `&section=${section}` : ""}
        ${procedure !== undefined ? `&procedure=${procedure}` : ""}
        ${subject !== undefined ? `&subject=${subject}` : ""}`;
}

export { buildConseilSearchQuery, buildConseilSearchLink };
