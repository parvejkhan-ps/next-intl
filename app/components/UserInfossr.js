import { getTranslations } from "next-intl/server";


export default async function UserInfoSSR({ count }) {
  
  const t =  await getTranslations();
  return (
    <div>
      <p>{t('dashboard.stats', { count })}</p>
    </div>
  );
}
