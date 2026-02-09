"use client";
import React from 'react';
import withTranslation from '../i18n/withTranslation';
function ProfileHead(props) {
    const { t } = props;

    return (
      <div>
        <h2>{t("campaignProfile:groupButtonText")}</h2>
        <h2>{t("campaignProfile:groupButtonText2","groupButtonText2 is not in so defult value is printed Group Button Text")}</h2>
        <h2>{t("common:title", { name: "parvej class" })}</h2>
        <h2>{t("common:titles", { name: "parvej class",defaultValue:"titles is not prenet in common so defult value is printed" })}</h2>
        <h2>{t("dashboard:title", { name: "parvej class" ,defaultValue:"Dashbord is not impoted so that defult value is printing "})}</h2>
      </div>
    );
}

export default withTranslation(['campaignProfile','common','dashboard'])(ProfileHead);
