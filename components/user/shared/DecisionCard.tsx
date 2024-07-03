import { Button } from "@components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import SupremeCourtDecision from "@typings/SupremeCourtDecision";
import Link from "next/link";
import React from "react";

const DecisionCard = ({ decision }: { decision: SupremeCourtDecision }) => {
  return (
    <div>
      <Card className="bg-slate-100 min-h-60 ">
        <CardHeader>
          <CardTitle className="text-primary text-xl leading-normal">{`القرار رقم ${decision.number} الصادر بتاريخ ${decision.date}`}</CardTitle>
          <CardDescription>{decision.subject}</CardDescription>
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
            <Link href={`/court-decisions/${decision.number}`}>
              اقرأ المزيد
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DecisionCard;
