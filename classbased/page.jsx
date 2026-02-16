import ProfileHead from '../components/ProfileHead';
import {withTranslation} from '../i18n/withTranslation';

async function Page(props) {
    const { t } = props;

  return <>
  
  <h2>{t("campaignProfile:groupButtonText","deflt")}</h2>
        <h2>{t("common:title", { name: "parvej class", surname: "khan" })}</h2>


        class based component
  <ProfileHead />
  </>;
}

export default withTranslation(['campaignProfile','common'])(Page);
