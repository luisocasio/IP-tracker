import React from "react";
import { connect } from "react-redux";

import contentdata from "../styles/contentdata.module.scss";

const ContentData = ({ contentData, hasIpData }) => {
  if (hasIpData) {
    console.log("we haz the data");
    console.log(contentData);
  }

  return (
    <div className={contentdata.container}>
      <h2>IP INFORMATION</h2>
      <p>
        ip: <span>{contentData.ip}</span>
      </p>
      <p>
        City: <span>{contentData.city}</span>
      </p>
      <p>
        Country: <span>{contentData.country}</span>
      </p>
      <p>
        Organization: <span>{contentData.organization}</span>
      </p>
      <p>
        Provider: <span>{contentData.organization_name}</span>
      </p>
      <p>
        Region: <span>{contentData.region}</span>
      </p>
      <p>
        TimeZone: <span>{contentData.timezone}</span>
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    contentData: state.contentData,
    hasIpData: state.hasIpData
  };
};

export default connect(
  mapStateToProps,
  {}
)(ContentData);
