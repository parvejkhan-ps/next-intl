"use client";
import React from 'react';
import {withTranslation} from '../i18n/withTranslation';
import Link from 'next/link';
class Navigation1 extends React.Component {
    render() {
        const { t,i18n } = this.props;

    return (
      <div>
        {/* <h2>1.{t("campaignProfile:groupButtonText2",{ defaultValue: 'Save' })}</h2> */}
        {/* <h2>2.{t("campaignProfile:groupButtonText2",'Save' )}</h2> */}
        <h2>3.{t("campaignProfile:groupButtonText","groupButtonText2 is not in so defult value is printed Group Button Text")}</h2>
        {/* <h2>4.{t("common:titles", { name: "parvej" , surname:"khan"})}</h2> */}
        {/* <h2>5.{t("common:titles", { name: "parvej class",defaultValue:"titles is not present in common so defult value is printed" })}</h2> */}
        {/* <h2>6.{t("common:title", { name: "parvej",surname:"khan",defaultValue:"titles is not present in common so defult value is printed" })}</h2> */}
        {/* <h2>7.{t("common:shareProfileHeader","shareProfileHeader is not present in common so defult value is printed")}</h2> */}
        <h2>8.{t("dashboard:userName", { userName: "parvej class" ,defaultValue:"Dashbord is not impoted so that defult value is printing "})}</h2>
        {/* <h2>9.{t('coverFeeLabelWithAmount', "Less a third-party processing fee of {amount}.(defult value)", {amount: 10})}</h2> */}
        <Link href="/naviagation2">Go to Navigation 2</Link>
        <button onClick={() => i18n.changeLanguage("fr")}>Change Language fr</button>
        <button onClick={() => i18n.changeLanguage("en")}>Change Language en</button>
      </div>
    );
  }
}

export default withTranslation(['dashboard','campaignProfile'])(Navigation1);
