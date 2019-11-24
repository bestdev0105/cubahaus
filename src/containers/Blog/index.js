import React from "react";
import { connect } from "react-redux";
import { IconButton } from "@material-ui/core";
import ReactMarkdown from "react-markdown";

import Button from "../../components/ButtonContainer";
import "./blog.scss";
class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentKey: null,
      keyCount: null
    };
  }

  componentDidMount() {
    this.props.location.state.blogArray.map((blog, key) => {
      if (blog.sys.id === this.props.location.state.blog.sys.id) {
        this.setState({
          keyCount: this.props.location.state.blogArray.length,
          currentKey: key
        });
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    const { auth } = nextProps;
    if (auth.error) {
      this.setState({});
    }
  }

  nextBlog = key => {
    {
      this.props.location.state.blogArray.map((blogItem, key) => {
        if (
          (this.state.currentKey + 1) %
            this.props.location.state.blogArray.length ===
          key
        ) {
          // console.log(blogItem.fields.blogTitle, key);
          this.props.history.push({
            pathname: `/blog/${blogItem.fields.blogTitle}`,
            state: {
              blog: blogItem,
              blogArray: this.props.location.state.blogArray
            }
          });
        }
      });
    }
    this.setState({
      currentKey: (key + 1) % this.state.keyCount
    });
  };

  render() {
    const { blogArray } = this.props.location.state;
    const { currentKey } = this.state;
    console.log("blog props", this.props);
    return (
      <div className="blog">
        {blogArray.map((blogItem, key) =>
          currentKey === key ? (
            <div key={key}>
              <div className="blog__title">{blogItem.fields.blogTitle}</div>
              <ReactMarkdown source={blogItem.fields.blogPost} />
            </div>
          ) : null
        )}
        <div className="blog__buttons">
          <IconButton
            className="blog__buttons__LineButton"
            onClick={() => this.props.history.goBack()}
          >
            Back
          </IconButton>
          <IconButton
            style={{ padding: "0px", borderRadius: "25px" }}
            onClick={() => this.nextBlog(currentKey)}
          >
            <Button type="gradient" size="small">
              Next
            </Button>
          </IconButton>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog);
