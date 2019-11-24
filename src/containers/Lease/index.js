import React from "react";
import { connect } from "react-redux";
import Axios from "axios";
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Button,
  Paper,
  withStyles,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Grid,
  StepConnector
} from "@material-ui/core";

import { getDocsRequest } from "../../actions/docs";
import { uploadRequest } from "../../actions/upload";
import InputTextField from "../../components/InputTextField";
// import GradientButton from "../../components/ButtonContainer";

import tick from "../../assets/SVG/tick.svg";
import "./style.scss";

const styles = {
  root: {
    marginTop: "20px",
    borderRadius: 10,
    boxShadow: "0 0 47.7px 14.3px rgba(210, 215, 255, 0.43)",
    backgroundColor: "#ffffff"
  },
  input: {
    display: "none"
  },
  stepperRoot: {
    backgroundColor: "transparent"
  },
  stepperLabel: {
    fontFamily: "Montserrat",
    fontSize: 14.5,
    fontWeight: 600,
    letterSpacing: 0.7,
    textAlign: "left",
    color: "#596390"
  },
  stepperLabelCompleted: {
    fontWeight: "600 !important",
    color: "#596390 !important"
  },
  stepperContent: {
    marginLeft: 16,
    paddingLeft: 24,
    width: 211,
    fontFamily: "Open Sans",
    fontSize: 15,
    fontWeight: 300,
    lineHeight: 1.6,
    letterSpacing: 1.1,
    textAlign: "left",
    color: "#596390"
  },
  stepperConnector: {
    marginLeft: 16
  },
  stepperIconRoot: {
    width: 30,
    height: 30,
    color: "transparent",
    border: "2px solid #d2d4e2",
    borderRadius: "50%"
  },
  stepperIconCompleted: {
    width: 32,
    height: 32,
    // color: "transparent !important",
    borderRadius: "50%",
    border: "none",
    backgroundImage: "linear-gradient(27deg, #5980ff 1%, #0000ff 99%)",
    boxShadow: "0 0 78.1px 5.9px rgba(37, 60, 158, 0.24)"
  },
  tableTitle: {
    padding: "16px 26px",
    fontFamily: "Comfortaa",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 0.9,
    textAlign: "left",
    color: "#ffffff",
    borderRadius: "10px 10px 0 0",
    boxShadow: "0 0 78.1px 5.9px rgba(37, 60, 158, 0.24)",
    backgroundImage: "linear-gradient(357deg, #4868ff, #0000ff 99%)"
  },
  table: {
    padding: "10px"
  },
  thead: {
    fontFamily: "Montserrat",
    fontSize: 15.5,
    fontWeight: 600,
    letterSpacing: 0.2,
    textAlign: "left",
    color: "#4c5788",
    borderBottom: "1px solid rgba(207, 211, 230, 0.16)",
    padding: "17px 28px 17px 24px"
  },
  contractContainer: {
    marginTop: 70
  }
};

const uploadIdSteps = [
  {
    label: "Upload ID 1",
    content: "Please upload your ID for a verification prosess"
  },
  {
    label: "Upload ID 2",
    content: "Please upload your ID for a verification prosess"
  },
  {
    label: "Upload ID 3",
    content: "Please upload your ID for a verification prosess"
  }
];

const contractSignSteps = [
  {
    label: "Download documents",
    content: "Please download the required contracts to sign"
  },
  {
    label: "Sign documents",
    content: "Please sign the downloaded documents"
  },
  {
    label: "Upload signed documents",
    content: "Please upload the signed documents"
  }
];

class Lease extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedId: null,
      comment: "",
      document_to_upload: "",
      isVisibleDialog: false
    };
  }

  componentDidMount() {
    this.props.getDocsRequest();
  }

  onClickDownload(download_link) {
    if (download_link) {
      Axios.request({
        url: download_link,
        method: "GET",
        responseType: "blob" // important
      }).then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "file.png");
        document.body.appendChild(link);
        link.click();
      });
    }
  }

  onClickUpload(id) {
    this.setState({
      selectedId: id,
      isVisibleDialog: true
    });
  }

  handleFormInput = e => {
    const { name, value, files } = e.target;
    console.log(files);
    this.setState({
      [name]: name === "document_to_upload" ? files[0] : value
    });
  };

  handleUpload = () => {
    const { selectedId, comment, document_to_upload } = this.state;

    const payload = new FormData();
    payload.append("document_id", selectedId);
    payload.append("comment", comment);
    payload.append("document_to_upload", document_to_upload);
    // const payload = {
    //   document_id: selectedId,
    //   comment,
    //   document_to_upload
    // };

    this.props.uploadRequest(payload);
  };

  renderCustomStepperIcon = isCompleted => {
    return (
      <div
        className={`stepperIconWrapper ${
          isCompleted ? "completed" : "incompleted"
        }`}
      >
        {isCompleted && <img src={tick} className="tick" alt="tick" />}
      </div>
    );
  };

  render() {
    const { docs, classes } = this.props;
    const { isVisibleDialog, comment } = this.state;

    const { ids, leases } = docs;
    return (
      <div className="lease">
        <div className="lease__description">
          <span className="title">
            Please go through all the steps before completing
          </span>
        </div>
        <Grid container direction="row" alignItems="center">
          <Grid item xs={4}>
            <Stepper
              orientation={"vertical"}
              classes={{ root: classes.stepperRoot }}
              connector={
                <StepConnector classes={{ root: classes.stepperConnector }} />
              }
            >
              {uploadIdSteps.map((step, index) => (
                <Step key={index} active={false} completed={index === 0}>
                  <StepLabel
                    icon={this.renderCustomStepperIcon(index === 0)}
                    classes={{
                      label: classes.stepperLabel,
                      completed: classes.stepperLabelCompleted
                    }}
                  >
                    Step {index + 1}: {step.label}
                  </StepLabel>
                  <StepContent
                    TransitionProps={{ in: true }}
                    classes={{ root: classes.stepperContent }}
                  >
                    {step.content}
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.root}>
              <Paper classes={{ root: classes.tableTitle }}>
                <span>IDs to upload</span>
              </Paper>
              <Table classes={{ root: classes.table }}>
                <TableHead>
                  <TableRow>
                    <TableCell classes={{ head: classes.thead }}>
                      Document
                    </TableCell>
                    <TableCell classes={{ head: classes.thead }}>
                      Upload
                    </TableCell>
                    <TableCell classes={{ head: classes.thead }}>
                      Status
                    </TableCell>
                    <TableCell classes={{ head: classes.thead }} />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {ids &&
                    ids.map(id => (
                      <TableRow key={`lease_${id.pk}`}>
                        <TableCell>{id.document_name}</TableCell>
                        <TableCell>{id.comment}</TableCell>
                        <TableCell>{id.status_of_uploaded_document}</TableCell>
                        <TableCell>
                          <Button
                            onClick={this.onClickUpload.bind(this, id.pk)}
                          >
                            Upload
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          alignItems="center"
          classes={{ container: classes.contractContainer }}
        >
          <Grid item xs={4}>
            <Stepper
              orientation={"vertical"}
              classes={{ root: classes.stepperRoot }}
              connector={
                <StepConnector classes={{ root: classes.stepperConnector }} />
              }
            >
              {contractSignSteps.map((step, index) => (
                <Step key={index} active={false} completed={index === 0}>
                  <StepLabel
                    icon={this.renderCustomStepperIcon(index === 0)}
                    classes={{
                      label: classes.stepperLabel,
                      completed: classes.stepperLabelCompleted
                    }}
                  >
                    Step {index + 1}: {step.label}
                  </StepLabel>
                  <StepContent
                    TransitionProps={{ in: true }}
                    classes={{ root: classes.stepperContent }}
                  >
                    {step.content}
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.root}>
              <Paper classes={{ root: classes.tableTitle }}>
                <span>Contract to Sign</span>
              </Paper>
              <Table classes={{ root: classes.table }}>
                <TableHead>
                  <TableRow>
                    <TableCell classes={{ head: classes.thead }}>
                      Document
                    </TableCell>
                    <TableCell classes={{ head: classes.thead }}>
                      Download
                    </TableCell>
                    <TableCell classes={{ head: classes.thead }}>
                      Sign
                    </TableCell>
                    <TableCell classes={{ head: classes.thead }}>
                      Upload
                    </TableCell>
                    <TableCell classes={{ head: classes.thead }}>
                      Status
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {leases &&
                    leases.map(lease => (
                      <TableRow key={`lease_${lease.pk}`}>
                        <TableCell>{lease.document_name}</TableCell>
                        <TableCell>{lease.document_description}</TableCell>
                        <TableCell>
                          {lease.status_of_uploaded_document}
                        </TableCell>
                        <TableCell>
                          <Button
                            onClick={this.onClickUpload.bind(this, lease.pk)}
                          >
                            Upload
                          </Button>
                          <Button
                            onClick={this.onClickDownload.bind(
                              this,
                              lease.document_to_download
                            )}
                          >
                            Download
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
        <Dialog
          open={isVisibleDialog}
          aria-labelledby="form-dialog-title"
          onClose={() => this.setState({ isVisibleDialog: false })}
        >
          <DialogTitle id="form-dialog-title">Upload</DialogTitle>
          <DialogContent>
            <InputTextField
              name="comment"
              label="Comment"
              type="text"
              onChange={this.handleFormInput}
              value={comment}
              state={comment}
              margin="normal"
            />
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              type="file"
              name="document_to_upload"
              onChange={this.handleFormInput}
            />
            <label htmlFor="contained-button-file">
              <Button
                variant="contained"
                component="span"
                className={classes.button}
              >
                Choose File
              </Button>
            </label>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleUpload} color="primary">
              Upload
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = ({ docs }) => ({
  docs: docs.docs
});

const mapDispatchToProps = {
  getDocsRequest,
  uploadRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Lease));
