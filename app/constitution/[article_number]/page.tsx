import getConstitutionResults from "@actions/getConstitutionResults";
import { Button } from "@components/ui/button";
import Footer from "@components/user/layout/Footer";
import ServerSideNavbar from "@components/user/layout/ServerSideNavbar";
import ConstitutionDetails from "@components/user/shared/ConstitutionDetails";
import ConstitutionDecision from "@typings/ConstitutionDecision";
import { MdShare, MdDownload, MdCopyAll, MdSave, MdLink } from "react-icons/md";

const ConstitutionDetailsPage = async ({
    params,
}: {
    params: { article_number: string };
}) => {


    const article_number = params.article_number;
    const data = await getConstitutionResults(
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        article_number,
        1
    );

    const decision: ConstitutionDecision = data?.data[0];

    const operations = [
        <MdShare size={20} />,
        <MdDownload size={20} />,
        <MdCopyAll size={20} />,
        <MdSave size={20} />,
        <MdLink size={20} />,
    ];

    return (
        <>
            <ServerSideNavbar />
            <main className="pt-24 px-[5%]">
                <h1 className="text-primary py-4 font-bold text-4xl ">التفاصيل</h1>
                <div className="flex justify-end">
                    {operations.map((operation, index) => (
                        <Button variant={"ghost"} key={index} className="text-primary">
                            {operation}
                        </Button>
                    ))}
                </div>
                <div className="bg-primary w-full h-1 rounded-md mt-1 mb-4" />
                <ConstitutionDetails decision={decision} />
            </main>
            <Footer />
        </>
    );
};

export default ConstitutionDetailsPage;
