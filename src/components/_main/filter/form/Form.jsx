import React from "react";
import { styled } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
const StyledCheckBox = styled("div")(({ theme }) => ({
  width: 24,
  height: 25,
  border: "1px solid #D0D5DD",
  borderRadius: "4px",
}));

export default function Form() {
  return (
    <FormControl component="fieldset">
      <FormGroup
        aria-label="position"
        row
        sx={{ justifyContent: "space-between" }}
      >
        <FormControlLabel
          value="top"
          control={
            <Checkbox
              icon={<StyledCheckBox />}
              checkedIcon={
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.0365 0H6.97548C2.6053 0 0 2.7125 0 7.2625V17.725C0 22.2875 2.6053 25 6.97548 25H17.0245C21.3947 25 24 22.2875 24 17.7375V7.2625C24.012 2.7125 21.4067 0 17.0365 0ZM17.7448 9.625L10.9374 16.7125C10.7694 16.8875 10.5413 16.9875 10.3011 16.9875C10.061 16.9875 9.8329 16.8875 9.66482 16.7125L6.26712 13.175C5.91895 12.8125 5.91895 12.2125 6.26712 11.85C6.6153 11.4875 7.19158 11.4875 7.53976 11.85L10.3011 14.725L16.4722 8.3C16.8204 7.9375 17.3967 7.9375 17.7448 8.3C18.093 8.6625 18.093 9.25 17.7448 9.625Z"
                    fill="#2563EB"
                  />
                </svg>
              }
            />
          }
          label="2D Product"
          labelPlacement="end"
        />
        <FormControlLabel
          value="start"
          control={
            <Checkbox
              icon={<StyledCheckBox />}
              checkedIcon={
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.0365 0H6.97548C2.6053 0 0 2.7125 0 7.2625V17.725C0 22.2875 2.6053 25 6.97548 25H17.0245C21.3947 25 24 22.2875 24 17.7375V7.2625C24.012 2.7125 21.4067 0 17.0365 0ZM17.7448 9.625L10.9374 16.7125C10.7694 16.8875 10.5413 16.9875 10.3011 16.9875C10.061 16.9875 9.8329 16.8875 9.66482 16.7125L6.26712 13.175C5.91895 12.8125 5.91895 12.2125 6.26712 11.85C6.6153 11.4875 7.19158 11.4875 7.53976 11.85L10.3011 14.725L16.4722 8.3C16.8204 7.9375 17.3967 7.9375 17.7448 8.3C18.093 8.6625 18.093 9.25 17.7448 9.625Z"
                    fill="#2563EB"
                  />
                </svg>
              }
            />
          }
          label="3D content"
          labelPlacement="end"
        />
        <FormControlLabel
          value="With Icon"
          control={
            <Checkbox
              icon={<StyledCheckBox />}
              checkedIcon={
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.0365 0H6.97548C2.6053 0 0 2.7125 0 7.2625V17.725C0 22.2875 2.6053 25 6.97548 25H17.0245C21.3947 25 24 22.2875 24 17.7375V7.2625C24.012 2.7125 21.4067 0 17.0365 0ZM17.7448 9.625L10.9374 16.7125C10.7694 16.8875 10.5413 16.9875 10.3011 16.9875C10.061 16.9875 9.8329 16.8875 9.66482 16.7125L6.26712 13.175C5.91895 12.8125 5.91895 12.2125 6.26712 11.85C6.6153 11.4875 7.19158 11.4875 7.53976 11.85L10.3011 14.725L16.4722 8.3C16.8204 7.9375 17.3967 7.9375 17.7448 8.3C18.093 8.6625 18.093 9.25 17.7448 9.625Z"
                    fill="#2563EB"
                  />
                </svg>
              }
            />
          }
          label="Bottom"
          labelPlacement="end"
        />
      </FormGroup>
    </FormControl>
  );
}
