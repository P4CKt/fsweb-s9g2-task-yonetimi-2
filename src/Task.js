import React from "react";
import { differenceInDays, differenceInHours, parseISO } from 'date-fns'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import tr from "date-fns/locale/tr";




const Task = ({ taskObj, onComplete }) => {
let isLess=null;
  const remainingDay= (differenceInDays( 
  new Date(taskObj.deadline),
   new Date())
 );
 const remainingHours= (differenceInHours( 
  new Date(taskObj.deadline),
  new Date())
  );

  ((remainingDay)<=3 && remainingDay>-1)? isLess=true:isLess=false;

  const numberOfDay= formatDistanceToNow(new Date(taskObj.deadline),
{
  locale:tr
}
  );
  console.log(isLess)
  console.log(remainingDay)
  console.log(remainingHours)

  return (
    <div className={"p-6 bg-[#fff] rounder-[5px] leading-6 mt-4 shadow-[0_4px_5px_0_rgb(0,0,0,0.3)]"}>
      <h3 className={"text-[18px] text-[#c8781a]"}>
       {taskObj.title}</h3>
      <div className={"text-[12px] pt-[4px]"}>Son Teslim:  <span className={ ` inline-block p-[3px_8px] rounded-[2px] ${isLess? 'bg-less' : 'bg-blue-400'}`}> {numberOfDay} {remainingHours>0?"Kaldı":"Geçti"}</span></div>
      <p className={"pt-2 pb-3 text-sm text-[#444]"}>{taskObj.description}</p>
      <div>
  
        {taskObj.people.map((p) => (
          <span className={"inline-block p-[5px_12px] text-[14px] border-solid border-[1px] border-[#ccc] mr-[4px] mb-[6px] rounded-[30px]"} key={p}>{p}</span>
  
        ))}
      </div>
      {onComplete && <button className={"block py-2 px-3 ml-auto bg-[#fecc91] shadow-[0_4px_60px_-5px_rgba(0,0,0,0.05)] rounded-[3px] border-[0px] cursor-pointer	 "}onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>}
    </div>
  )
};

export default Task;
