export const BUTTON_CLICK = "BUTTON_CLICK";

export const handleClick = data => {
  console.log(data);
  return {
    type: BUTTON_CLICK,
    data
  };
};
