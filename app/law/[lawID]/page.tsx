import getLawSearchById from "@actions/getLawSearchById";
import { Button } from "@components/ui/button";
import Footer from "@components/user/layout/Footer";
import ServerSideNavbar from "@components/user/layout/ServerSideNavbar";
import LawDetails from "@components/user/shared/LawDecisionDetails";
import LawDecision from "@typings/LawDecision";
import { MdShare, MdDownload, MdCopyAll, MdSave, MdLink } from "react-icons/md";

const LawDetailsPage = async ({
    params,
}: {
    params: { lawID: number };
}) => {
    // Récupération du numéro de texte depuis les paramètres
    const lawID = params.lawID;

    // Appel de la fonction pour obtenir les détails de la loi
    const data = await getLawSearchById(lawID);

    // Conversion des données en type LawDecision
    const decision: LawDecision = data;

    // Opérations à afficher (icônes)
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
                <h1 className="text-primary py-4 font-bold text-4xl">التفاصيل</h1>
                <div className="flex justify-end space-x-2">
                    {/* Affichage des boutons d'opérations */}
                    {operations.map((operation, index) => (
                        <Button variant="ghost" key={index} className="text-primary">
                            {operation}
                        </Button>
                    ))}
                </div>
                <div className="bg-primary w-full h-1 rounded-md mt-1 mb-4" />
                {/* Affichage des détails de la loi */}
                <LawDetails decision={decision} />
            </main>
            <Footer />
        </>
    );
};

export default LawDetailsPage;
