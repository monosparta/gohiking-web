import { Select, MenuItem } from "@material-ui/core";
import { imageLabel } from "data/imageLabel";
import React, { useState, useEffect } from "react";

export default function TagSelector(props) {
  const [tag, setTag] = useState(0);
  const updateTag = props.img;
  //   const setSelectors = props.setSelectors;
  const handleTag = e => {
    setTag(e.target.value);
    updateTag[props.index].tag = e.target.value;
    console.log("=== handleTag ===", updateTag);
  };
  useEffect(() => {
    setTag(0);
  }, [props.index]);

  return (
    <div>
      <Select
        fullWidth
        value={tag}
        onChange={e => handleTag(e)}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value={0} disabled>
          請選擇{props.index}
        </MenuItem>
        {imageLabel.map((item, i) => (
          <MenuItem value={item.value} key={i}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}
