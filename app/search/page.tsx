import { getUserDataFromCookies } from "@services/authentication.service";
import { SearchTab } from "@components/user/search/SearchTab";
import FirstPage from "@components/user/shared/FirstPage";
import Footer from "@components/user/layout/Footer";
import ServerSideNavbar from "@components/user/layout/ServerSideNavbar";
import NoService from "@components/user/shared/NoService";
import getLawSearchResults from "@actions/getLawSearchResults";
import DecisionListLaw from "@components/user/search/DecisionListLaw";
import DecisionListConseil from "@components/user/search/DecisionListConseil";
import getConseilSearchResults from "@actions/getConseilSearchResults";
import DecisionListConstitution from "@components/user/search/DecisionListConstitution";
import getConstitutionResults from "@actions/getConstitutionResults";
import DecisionsList from "@components/user/search/DecisionsList";
import getSupremeCourtSearchResults from "@actions/getSupremeCourtSearchResults";

const SearchPage = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const search_type: string =
    typeof searchParams?.search_type === "string"
      ? searchParams.search_type
      : "supreme_court";
  const search_query =
    typeof searchParams?.search_query === "string"
      ? searchParams.search_query
      : undefined;
  const decision_number =
    typeof searchParams?.decision_number === "string"
      ? searchParams.decision_number
      : undefined;
  const decision_subject =
    typeof searchParams?.decision_subject === "string"
      ? searchParams.decision_subject
      : undefined;
  const start_date =
    typeof searchParams?.start_date === "string"
      ? searchParams.start_date
      : undefined;
  const end_date =
    typeof searchParams?.end_date === "string"
      ? searchParams.end_date
      : undefined;
  const search_field =
    typeof searchParams?.search_field === "string"
      ? searchParams.search_field
      : undefined;

  const section_number =
    typeof searchParams?.section_number === "string"
      ? searchParams.section_number
      : undefined;
  const section_name =
    typeof searchParams?.section_name === "string"
      ? searchParams.section_name
      : undefined;
  const chapter_number =
    typeof searchParams?.chapter_number === "string"
      ? searchParams.chapter_number
      : undefined;
  const chapter_name =
    typeof searchParams?.chapter_name === "string"
      ? searchParams.chapter_name
      : undefined;
  const article_number =
    typeof searchParams?.article_number === "string"
      ? searchParams.article_number
      : undefined;

  const number =
    typeof searchParams?.number === "string" ? searchParams.number : undefined;

  const chamber =
    typeof searchParams?.chamber === "string"
      ? searchParams.chamber
      : undefined;

  const section =
    typeof searchParams?.section === "string"
      ? searchParams.section
      : undefined;
  const procedure =
    typeof searchParams?.procedure === "string"
      ? searchParams.procedure
      : undefined;
  const subject =
    typeof searchParams?.subject === "string"
      ? searchParams.subject
      : undefined;

  const field =
    typeof searchParams?.field === "string" ? searchParams.field : undefined;

  const ministry =
    typeof searchParams?.ministry === "string"
      ? searchParams.ministry
      : undefined;

  const text_number =
    typeof searchParams?.text_number === "string"
      ? searchParams.text_number
      : undefined;

  const text_type =
    typeof searchParams?.text_type === "string"
      ? searchParams.text_type
      : undefined;

  const journal_start_date =
    typeof searchParams?.journal_start_date === "string"
      ? searchParams.journal_start_date
      : undefined;
  const journal_end_date =
    typeof searchParams?.journal_end_date === "string"
      ? searchParams.journal_end_date
      : undefined;
  const signature_start_date =
    typeof searchParams?.signature_start_date === "string"
      ? searchParams.signature_start_date
      : undefined;
  const signature_end_date =
    typeof searchParams?.signature_end_date === "string"
      ? searchParams.signature_end_date
      : undefined;

  const userDataCookies = await getUserDataFromCookies();
  const canAccess = userDataCookies?.canAccess;

  const canAccessSupremeCourt = canAccess?.includes("search-supreme-court");
  const canAccessConstitution = canAccess?.includes("search-constitution");
  const canAccessConseil = canAccess?.includes("search-conseil");
  const canAccessLaws = canAccess?.includes("search-laws");

  if (search_type === "supreme_court") {
    if (canAccessSupremeCourt) {
      const data = await getSupremeCourtSearchResults(
        search_query,
        decision_number,
        {
          from: start_date,
          to: end_date,
        },
        decision_subject,
        search_field,
        1
      );

      const decisions = data?.data;
      return (
        <>
          <ServerSideNavbar />
          <main className="pt-24 px-[5%]">
            <FirstPage />
            <SearchTab
              canAccessSupremeCourt={canAccessSupremeCourt}
              query={{ search_type }}
            />
            <DecisionsList
              query={{
                search_query,
                decision_number,
                start_date,
                end_date,
                decision_subject,
                search_field,
              }}
              initiaDecisions={decisions}
            />
          </main>
          <Footer />
        </>
      );
    } else {
      return (
        <>
          <ServerSideNavbar />
          <main className="pt-24 px-[5%]">
            <FirstPage />
            <SearchTab
              canAccessSupremeCourt={canAccessSupremeCourt}
              query={{ search_type }}
            />
            <NoService />
          </main>
          <Footer />
        </>
      );
    }
  } else if (search_type === "constitution") {
    if (canAccessConstitution) {
      const data = await getConstitutionResults(
        search_query,
        section_number,
        section_name,
        chapter_number,
        chapter_name,
        article_number,
        1
      );

      const decisions = data?.data;

      return (
        <>
          <ServerSideNavbar />
          <main className="pt-24 px-[5%]">
            <FirstPage />
            <SearchTab
              query={{ search_type }}
              canAccessConstitution={canAccessConstitution}
            />
            <DecisionListConstitution
              query={{
                search_query,
                section_number,
                section_name,
                chapter_number,
                chapter_name,
                article_number,
              }}
              initiaDecisions={decisions}
            />
          </main>
          <Footer />
        </>
      );
    } else {
      return (
        <>
          <ServerSideNavbar />
          <main className="pt-24 px-[5%]">
            <FirstPage />
            <SearchTab
              canAccessConstitution={canAccessConstitution}
              query={{ search_type }}
            />
            <NoService />
          </main>
          <Footer />
        </>
      );
    }
  } else if (search_type === "conseil") {
    if (canAccessConseil) {
      const data = await getConseilSearchResults(
        search_query,
        number,
        {
          from: start_date,
          to: end_date,
        },
        chamber,
        section,
        procedure,
        subject,
        1
      );

      const decisions = data?.data;

      return (
        <>
          <ServerSideNavbar />
          <main className="pt-24 px-[5%]">
            <FirstPage />
            <SearchTab
              canAccessConseil={canAccessConseil}
              query={{ search_type }}
            />
            <DecisionListConseil
              query={{
                search_query,
                number,
                start_date,
                end_date,
                chamber,
                section,
                procedure,
                subject,
              }}
              initiaDecisions={decisions}
            />
          </main>
          <Footer />
        </>
      );
    } else {
      return (
        <>
          <ServerSideNavbar />
          <main className="pt-24 px-[5%]">
            <FirstPage />
            <SearchTab
              canAccessConseil={canAccessConseil}
              query={{ search_type }}
            />
            <NoService />
          </main>
          <Footer />
        </>
      );
    }
  } else if (search_type === "laws") {
    if (canAccessLaws) {
      const data = await getLawSearchResults(
        search_query,
        field,
        ministry,
        text_number,
        text_type,
        {
          from: journal_start_date,
          to: journal_end_date,
        },
        {
          from: signature_start_date,
          to: signature_end_date,
        },
        1
      );

      const decisions = data?.data;

      return (
        <>
          <ServerSideNavbar />
          <main className="pt-24 px-[5%]">
            <FirstPage />
            <SearchTab canAccessLaws={canAccessLaws} query={{ search_type }} />
            <DecisionListLaw
              query={{
                search_query,
                field,
                ministry,
                text_number,
                text_type,
                journal_start_date,
                journal_end_date,
                signature_start_date,
                signature_end_date,
              }}
              initiaDecisions={decisions}
            />
          </main>
          <Footer />
        </>
      );
    } else {
      return (
        <>
          <ServerSideNavbar />
          <main className="pt-24 px-[5%]">
            <FirstPage />
            <SearchTab canAccessLaws={canAccessLaws} query={{ search_type }} />
            <NoService />
          </main>
          <Footer />
        </>
      );
    }
  }
};

export default SearchPage;
