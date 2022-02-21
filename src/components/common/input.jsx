/** @jsxImportSource theme-ui */
import { useState, useEffect } from "react";

export default function Input({
  endAnimation = () => {},
  styles = {},
  error = { error: false, newError: false },
  defaultValue = "",
  text,
  color = "#ff6801",
  errorColor = "#FD2C25",
  type = "text",
  onChange = () => {},
}) {
  const [className, setClassName] = useState("");
  const [value, setValue] = useState(defaultValue);
  const handleChange = (event) => {
    onChange(event.target.value);
    setValue(event.target.value);
  };
  useEffect(() => {
    if (error.newError) setClassName("error-animation");
  }, [error.newError]);

  const onAnimationEnd = () => {
    setClassName("");
    endAnimation();
  };

  return (
    <div
      onAnimationEnd={onAnimationEnd}
      className={className}
      sx={{ ...styles, position: "relative" }}
    >
      <div
        sx={{
          width: "calc(100% - 20px)",
          position: "relative",
          top: "10px",
          left: "10px",
        }}
      >
        <div
          sx={{
            backgroundColor: "white",
            padding: "3px 10px",
            width: "fit-content",
          }}
        >
          <span
            sx={{
              fontSize: "12px",
              fontWeight: "200",

              color: error.error ? errorColor : color,
            }}
          >
            {text}
          </span>
        </div>
      </div>

      <input
        sx={{
          width: "100%",
          border: `1px solid ${error.error ? errorColor : color}`,
          borderRadius: "3px",
          height: "43px",
          paddingLeft: "15px",
          fontSize: "16px",
          fontWeight: "200",
          "&:focus": {
            outline: "none",
          },
        }}
        type={type}
        value={value}
        onChange={handleChange}
      ></input>
    </div>
  );
}