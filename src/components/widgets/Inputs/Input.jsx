import { forwardRef } from "react";

export const Input = forwardRef((props, ref) => {
  const styles = {
    padding: "15px",
  };
  return <input  ref={ref} style={styles} {...props} autoComplete="off" />;
});
