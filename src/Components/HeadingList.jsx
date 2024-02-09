import React, { useState } from "react";
import "./css/HeadingList.scss";
import Heading from "./Heading";
import { getInitials } from "./utils";

function HeadingList({ headings, onSelectHeading }) {

  return (
    <div className="Hlist">
      <ul className="Headings-List">
        {headings.map((heading) => {
          const initials = getInitials(heading.name);
          return (
            <Heading
              {...heading}
              initials={initials.toUpperCase()}
              key={heading.name}
              onSelect={() => onSelectHeading(heading)}
            />
          );
        })}
        {/* <Heading {...heading}/> is same as writing 
<Heading name={heading.name} color={heading.color} initials={heading.initials} notes={heading.notes} /> */}
      </ul>
    </div>
  );
}

export default HeadingList;
