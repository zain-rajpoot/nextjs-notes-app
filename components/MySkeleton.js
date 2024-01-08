import React from "react";
import {Card, Skeleton,Divider} from "@nextui-org/react";

export default function MySkeleton() {
  const ShowManyTimes = Array.from({ length: 6 }, (_, index) => index);
  return (
    <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 mx-auto justify-items-center lg:grid-cols-3 items-center p-4">
      {ShowManyTimes.map((index)=>{
        return(
          <Card className="max-w-[400px] w-full space-y-5 p-4" radius="lg" key={index}>
          <div className="space-y-3">
            <Skeleton className="w-4/5 rounded-lg">
              <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-4/5 rounded-lg">
              <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Divider />
            <Skeleton className="w-full rounded-lg">
              <div className="h-3 w-full rounded-lg bg-default-200"></div>
            </Skeleton>
            <br/>
            <Skeleton className="w-1/5 rounded-lg">  
              <div className="h-3 w-1/5 rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
        </Card>
        )
      })}
   
</div>
  );
}
