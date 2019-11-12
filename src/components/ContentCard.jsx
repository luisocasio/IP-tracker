import React from "react";
import { connect } from "react-redux";
import { fetchFacts } from "../store/actions/index";
import ContentData from "./ContentData";
import Search from "./Search";
import contentcard from "../styles/contentcard.module.scss";

const ContentCard = ({ fetchFacts, isFetching, hasIpData }) => {
  if (isFetching) {
    return <h2>Loading IP data...</h2>;
  }

  const ipHandler = ip => {
    fetchFacts(ip);
  };

  return (
    <div className={contentcard.container}>
      <Search ipHandler={ipHandler} />
      {hasIpData && <ContentData />}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    contentCard: state.contentCard,
    isFetching: state.isFetching,
    hasIpData: state.hasIpData,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchFacts }
)(ContentCard);
