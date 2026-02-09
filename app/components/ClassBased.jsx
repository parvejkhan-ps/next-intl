"use client";
import React from 'react';
import withTranslation from '../i18n/withTranslation';
function ProfileHead(props) {
    const { t } = props;

    return (
      <div>
        <h2>{t("campaignProfile:groupButtonText","deflt")}</h2>
        <h2>{t("common:title", { name: "parvej class" })}</h2>
      </div>
    );
}

export default withTranslation(['campaignProfile','common'])(ProfileHead);
