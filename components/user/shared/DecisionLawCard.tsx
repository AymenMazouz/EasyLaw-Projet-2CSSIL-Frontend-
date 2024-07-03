import { Button } from "@components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@components/ui/card";
import LawDecision from "@typings/LawDecision";
import Link from "next/link";
import React from "react";

const DecisionLawCard = ({ decision }: { decision: LawDecision }) => {
    return (
        <div>
            <Card className="bg-slate-100 min-h-60 ">
                <CardHeader>
                    <CardTitle className="text-primary text-xl leading-normal">{`القرار رقم ${decision.text_number}`}</CardTitle>
                    <CardTitle className="text-primary text-xl leading-normal">{` الصادر بتاريخ : ${decision.journal_date}`}</CardTitle>
                    <CardDescription>{decision.ministry}</CardDescription>
                    <CardDescription>{decision.field}</CardDescription>


                </CardHeader>
                <CardContent>
                    <p>
                        {decision.content.length > 100 ? (
                            <span>{decision.content.slice(0, 100)}...</span>
                        ) : (
                                <span>{decision.content}</span>
                        )}
                    </p>
                </CardContent>
                <CardFooter>
                    <Button variant={"outline"}>
                        <Link href={`/law/${decision._id}`}>اقرأ المزيد</Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default DecisionLawCard;


