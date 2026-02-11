"use client";
import React from 'react';
import withTranslation from '../i18n/withTranslation';
class ProfileHead extends React.Component {
    render() {
        const { t,i18n } = this.props;

    return (
      <div>
        <h2>{t("campaignProfile:groupButtonText2",{ defaultValue: 'Save' })}</h2>
        <h2>{t("campaignProfile:groupButtonText2",'Save' )}</h2>
        <h2>{t("campaignProfile:groupButtonText","groupButtonText2 is not in so defult value is printed Group Button Text")}</h2>
        <h2>{t("common:titles", { name: "parvej" , surname:"khan"})}</h2>
        <h2>{t("common:titles", { name: "parvej class",defaultValue:"titles is not prenet in common so defult value is printed" })}</h2>
        <h2>{t("common:title", { name: "parvej",surname:"khan",defaultValue:"titles is not prenet in common so defult value is printed" })}</h2>
        <h2>{t("common:shareProfileHeader")}</h2>
        <h2>{t("dashboard:userName", { userName: "parvej class" ,defaultValue:"Dashbord is not impoted so that defult value is printing "})}</h2>
      </div>
    );
  }
}

export default withTranslation(['campaignProfile','common','dashboard'])(ProfileHead);
