import React from "react";
import { connect } from "react-redux";
// import Slider from "react-slick";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Grid } from "@material-ui/core";
import TitleText from "../../components/TitleText";
import ButtonContainer from "../../components/ButtonContainer";
import RoomCheckout from "../../components/RoomCheckout";
import RoomCheckoutDetail from "../../components/RoomCheckoutDetail";

import {
  // Card,
  // CardHeader,
  // CardActionArea,
  // CardMedia,
  Button,
  Dialog,
  // DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  withMobileDialog,
  withStyles
} from "@material-ui/core";
// import { stateRequest } from "../../actions/state";
// import { status } from "../../constants/user_status";
import {
  wishListRequest,
  roomSelectRequest,
  finalSelectRequest
} from "../../actions/room";
import "./wishlist.scss";
import { FINAL_SELECT_SUCCESS } from "../../constants/room";

const useStyles = {
  card1: {
    margin: "15px",
    maxWidth: 500
  },
  card2: {
    margin: "0 auto",
    width: 500
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // ratio 16:9
  }
};

// const sliderSetting = {
//   dots: false,
//   slidesToScroll: 1,
//   centerMode: true,
//   centerPadding: "40px",
//   speed: 500
// };

class WishList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      swiping: false,
      open: false,
      selectedRoomId: null,
      checkoutStep: false,
      selectedRoom: null
    };
  }

  componentDidMount() {
    this.props.wishListRequest();
  }

  componentDidUpdate(prevProps) {
    const { status } = this.props;
    const { status: prevStatus } = prevProps;

    if (status !== prevStatus && status === FINAL_SELECT_SUCCESS) {
      const { match } = this.props;
      this.props.history.push(`${match.url}/checkout/preview`);
    }
  }

  onClickRoom = room => {
    this.setState({ selectedRoomId: room.pk, selectedRoom: room });
  };

  onClickConfirm = e => {
    const { user } = this.props;
    const { selectedRoomId } = this.state;

    this.props.finalSelectRequest({
      user: user.user_id,
      room: selectedRoomId
    });

    this.setState({ open: false });
  };

  onClickCancel = e => {
    this.setState({ open: false });
  };

  onClose = e => {
    this.setState({ open: false });
  };

  checkoutNext = () => {
    !this.state.checkoutStep
      ? this.setState({
          checkoutStep: true
        })
      : this.setState({ open: true });
  };

  render() {
    const { wishList } = this.props;
    const { open, checkoutStep, selectedRoomId, selectedRoom } = this.state;

    return (
      <div className="dashboard">
        {/* <Slider
          {...sliderSetting}
          slidesToShow={wishList && wishList.length < 2 ? 1 : 2}
          onSwipe={e => this.setState({ swiping: false })}
        >
          {wishList &&
            wishList.map(room => (
              <div key={room.pk}>
                <Card
                  className={
                    wishList.length === 1 ? classes.card2 : classes.card1
                  }
                  raised={true}
                >
                  <CardActionArea
                    onClick={() =>
                      this.props.history.push(`/application/rooms/${room.pk}`)
                    }
                  >
                    <CardHeader title={room.room_name} />
                  </CardActionArea>
                  <CardActionArea
                    onClick={this.onClickRoom.bind(this, room.pk)}
                  >
                    <CardMedia
                      image={room.images[0].image}
                      title={room.room_name}
                      className={classes.media}
                    />
                  </CardActionArea>
                </Card>
              </div>
            ))}
        </Slider> */}
        <div className="checkoutPreview">
          <div className="checkoutPreview__title">
            <TitleText>Checkout Preview</TitleText>
          </div>
          {!checkoutStep ? (
            <div className="checkoutPreview__card">
              <span className="checkoutPreview__description">
                Please select {wishList !== null ? wishList.length : null} room
                from favorites
              </span>
              <Grid className="checkoutPreview__cardGrid">
                {wishList &&
                  wishList.map(room => (
                    <div
                      key={room.pk}
                      className=""
                      onClick={this.onClickRoom.bind(this, room)}
                    >
                      <RoomCheckout
                        room={room}
                        selected={selectedRoomId}
                        //  onClickRoom={() => history.push(`/application/rooms/${room.pk}`) }
                        //  roomSelectRequest={roomSelectRequest}
                      />
                    </div>
                  ))}
              </Grid>
            </div>
          ) : (
            <Grid className="preview2">
              <RoomCheckoutDetail room={selectedRoom} />
            </Grid>
          )}
          <ButtonContainer
            type="gradient"
            size="small"
            onClick={this.checkoutNext}
          >
            <span>NEXT</span>

            <ArrowForwardIcon fontSize={"small"} />
          </ButtonContainer>
        </div>
        <Dialog open={open} onClose={this.onClose}>
          {/* <DialogTitle>{"Confirm"}</DialogTitle> */}
          <DialogContent>
            <DialogContentText className="dialog__text">
              Are you sure?
            </DialogContentText>
            <DialogActions className="dialog__actions">
              <Button
                onClick={this.onClickCancel}
                className="dialog__LineButton"
              >
                Cancel
              </Button>
              <Button onClick={this.onClickConfirm} className="dialog__Button">
                Yes
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = ({ auth, room }) => ({
  user: auth.loggedInUser,
  wishList: room.wishlist,
  status: room.status
});

const mapDispatchToProps = {
  wishListRequest,
  roomSelectRequest,
  finalSelectRequest
};

export default withStyles(useStyles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withMobileDialog()(WishList))
);
