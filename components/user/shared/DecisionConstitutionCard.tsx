import { Button } from "@components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@components/ui/card";
import ConstitutionDecision from "@typings/ConstitutionDecision";
import Link from "next/link";
import React from "react";

const DecisionConstitutionCard = ({ decision }: { decision: ConstitutionDecision }) => {
    return (
        <div>
            <Card className="bg-slate-100 min-h-60 ">
                <CardHeader>
                    <CardTitle className="text-primary text-xl leading-normal">{`البـاب  ${decision.section_number} : ${decision.section_name}`}</CardTitle>
                    <CardDescription>{`الفصل  ${decision.chapter_number} : ${decision.chapter_name}`}</CardDescription>

                </CardHeader>
                <CardContent>
                    <p>
                        {decision.article_text.length > 100 ? (
                            <span>{decision.article_text.slice(0, 100)}...</span>
                        ) : (
                                <span>{decision.article_text}</span>
                        )}
                    </p>
                </CardContent>
                <CardFooter>
                    <Button variant={"outline"}>
                        <Link href={`/constitution/${decision.article_number}`}>اقرأ المزيد</Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default DecisionConstitutionCard;


   