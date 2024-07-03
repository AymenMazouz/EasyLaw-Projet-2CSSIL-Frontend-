
function buildLawSearchById(
    id: number
) {
    return `http://localhost:5000/laws/${id}`;
}

function buildLawSearchLinkById(
    id: number

) {
    return `/laws/${id}`;
}

export { buildLawSearchById, buildLawSearchLinkById };
