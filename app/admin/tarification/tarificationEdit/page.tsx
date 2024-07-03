"use client"
import EditPlanForm from '@components/admin/Tarification management/editPlanFrom'
import { Plan } from '@typings/Plan';
import { useSearchParams } from 'next/navigation';
import React from 'react'

function page() {
    const searchParams = useSearchParams();
  const plan:Plan = searchParams.get("plan")
    ? JSON.parse(searchParams.get("plan") || "")
    : null;
    console.log("plam",plan);
    
  return (
    <EditPlanForm  
      {...plan}
    />
  )
}

export default page