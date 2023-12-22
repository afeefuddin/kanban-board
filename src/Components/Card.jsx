import React, { Fragment, useContext, useEffect, useState } from "react";
import DisplayContext from "../Context/DisplayContext";
import UserIcon from "./UserIcon";
import { getUsername, statusMap } from "../utils/general";
import StatusIcon from "./StatusIcon";
import PriorityIcon from "./PriorityIcon";

function Card({ ticket, user }) {
  const username = getUsername(ticket, user);
  const { grouping } = useContext(DisplayContext);

  return (
    <div className="w-full flex flex-col rounded pt-3 pb-3 pl-5 pr-5 bg-light-secondary dark:bg-dark-secondary border  border-special-2 dark:border-special gap-2 shadow-shadow-1"
    style={{boxShadow:"0px 0px 8px 0px #ffffff22"}}>
      <div className="flex flex-row justify-between text-text-2">
        <div>{ticket.id}</div>
        <div>{grouping !== "user" && <UserIcon username={username} />}</div>
      </div>
      <div className="flex flex-row gap-2 mr-4">
        <div className="flex items-center justify-center">
          {grouping != "status" && (
            <StatusIcon
              status={Object.keys(statusMap).find(
                (key) => statusMap[key] === ticket.status
              )}
            />
          )}
        </div>
        <div className="text-md">{ticket.title}</div>
      </div>
      <div className="flex flex-row gap-2">
        <div className="flex items-center justify-center">
          {grouping != "priority" && (
            <div className="border border-text-2 rounded-sm p-px">
              <PriorityIcon priority={ticket.priority} />
            </div>
          )}
        </div>
        <div className="text-text-2 border border-text-2 rounded ">
          <div className="flex flex-row gap-1 pl-2 pr-2 text-sm">
            {ticket?.tag &&
              ticket.tag.map((item) => (
                <Fragment key={item}>
                  <div>#</div>
                  <span>{item}</span>
                </Fragment>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
