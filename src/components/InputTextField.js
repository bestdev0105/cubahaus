import React from "react";
import TextField from "@material-ui/core/TextField";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import COLORS from "../config/colors";

class InputTextField extends React.Component {
  render() {
    const {
      name,
      label,
      type,
      onChange,
      state,
      margin,
      className,
      placeholder,
      value,
      ...rest
    } = this.props;
    const theme = createMuiTheme({
      typography: {
        useNextVariants: true
      },
      overrides: {
        MuiFormControl: {
          root: {
						display: "block",
          },
          marginNormal: {
            margin: "0!important"
          }
        },
        MuiFormLabel: {
          root: {
            fontFamily: "Montserrat",
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: 0.9,
            color: "#596390"
          }
        },
        MuiInputBase: {
          root: {
            width: "100%"
          }
        },
        MuiInput: {
          input: {
            width: "100%",
            color: "#151eff",
            backgroundColor: "transparent",
            fontSize: "19.5px",
            fontWeight: 500,
            letterSpacing: "1px",
            margin: "15px 0px 8px 0px",
            padding: 0
          },
          underline: {
            "&::before": {
              borderBottom: "1px solid #9ba2c9"
            },
            "&::after": {
              borderBottom: "1px solid #9ba2c9"
            }
          }
        }
      }
    });

    return (
      <MuiThemeProvider theme={theme}>
        <TextField
          {...rest}
          autoComplete="nope"
          name={name}
          label={label}
          type={type}
          onChange={onChange}
          className={className}
          value={value}
          placeholder={placeholder}
          InputLabelProps={{
            shrink: true
          }}
        />
      </MuiThemeProvider>
    );
  }
}

export default InputTextField;
