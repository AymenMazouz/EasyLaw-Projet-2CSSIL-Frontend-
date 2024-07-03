import getConseilSearchResults from "@actions/getConseilSearchResults";
import { Button } from "@components/ui/button";
import Footer from "@components/user/layout/Footer";
import ServerSideNavbar from "@components/user/layout/ServerSideNavbar";
import ConseilDecisionDetails from "@components/user/shared/ConseilDecisionDetails";
import ConseilDecision from "@typings/ConseilDecision";
import { MdShare, MdDownload, MdCopyAll, MdSave, MdLink } from "react-icons/md";

const ConseilDecisionDetailsPage = async ({
    params,
}: {
    params: { conseilNumber: string };
}) => {
    const conseilNumber = params.conseilNumber;
    const data = await getConseilSearchResults(

        undefined,
        conseilNumber,
        {
            from: undefined,
            to: undefined,
        },
        undefined,
        undefined,
        undefined,

        undefined,
        1
    );

    const decision: ConseilDecision = data?.data[0];

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
                <ConseilDecisionDetails decision={decision} />
            </main>
            <Footer />
        </>
    );
};

export default ConseilDecisionDetailsPage;
