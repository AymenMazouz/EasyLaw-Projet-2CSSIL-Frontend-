function buildSearchConstitutionQuery(
    search_query: string | undefined,
    section_number: string | undefined,
    section_name: string | undefined,
    chapter_number: string | undefined,
    chapter_name: string | undefined,
    article_number: string | undefined,
    page: number
) {
    return `http://localhost:5000/constitution/search?page=${page}&per_page=9${search_query !== undefined ? `&search_query=${search_query}` : ""
        }${section_number !== undefined ? `&section_number=${section_number}` : ""
        }${section_name !== undefined
            ? `&section_name=${section_name} `
            : ""
        }${chapter_number !== undefined
        ? `&chapter_number=${chapter_number} `
            : ""
        }${chapter_name !== undefined
        ? `&chapter_name=${chapter_name} `
            : ""
        }${article_number !== undefined
        ? `&article_number=${article_number} `
            : ""
        }   
        `;
}

function buildSearchConstitutionLink(


    search_type: string | undefined,
    search_query: string | undefined,
    section_number: string | undefined,
    section_name: string | undefined,
    chapter_number: string | undefined,
    chapter_name: string | undefined,
    article_number: string | undefined,
) {
    console.log({
        search_type,
        search_query,
        section_number,
        section_name,
        chapter_number,
        chapter_name,
        article_number,
    });
    return `/search?search_type=${search_type}${search_query !== undefined ? `&search_query=${search_query}` : ""
        }${section_number !== undefined ? `&section_number=${section_number}` : ""
        }${section_name !== undefined
            ? `&section_name=${section_name}`
            : ""
        }${chapter_number !== undefined
        ? `&chapter_number=${chapter_number}`
            : ""
        }${chapter_name !== undefined
        ? `&chapter_name=${chapter_name}`
            : ""
        }${article_number !== undefined
        ? `&article_number=${article_number}`
            : ""
        }`;
}

export { buildSearchConstitutionLink, buildSearchConstitutionQuery };
