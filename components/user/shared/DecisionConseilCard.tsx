import { Button } from "@components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@components/ui/card";
import ConseilDecision from "@typings/ConseilDecision";
import Link from "next/link";
import React from "react";

const DecisionConseilCard = ({ decision }: { decision: ConseilDecision }) => {
    return (
        <div>
            <Card className="bg-slate-100 min-h-60 ">
                <CardHeader>
                    <CardTitle className="text-primary text-xl leading-normal">{`القرار رقم ${decision.number}`}</CardTitle>
                    <CardTitle className="text-primary text-xl leading-normal">{` الصادر بتاريخ : ${decision.date}`}</CardTitle>
                    <CardDescription>{decision.chamber}</CardDescription>

                </CardHeader>
                <CardContent>
                    <p>
                        {decision.principle.length > 100 ? (
                            <span>{decision.principle.slice(0, 100)}...</span>
                        ) : (
                            <span>{decision.principle}</span>
                        )}
                    </p>
                </CardContent>
                <CardFooter>
                    <Button variant={"outline"}>
                        <Link href={`/conseil/${decision.number}`}>اقرأ المزيد</Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default DecisionConseilCard;


