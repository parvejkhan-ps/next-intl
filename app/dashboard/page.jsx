import {getTranslations} from 'next-intl/server';
import UserInfo from '../components/UserInfo';
import { useTranslations } from 'next-intl';

export default function DashboardPage() {
  const t =  useTranslations('dashboard');
  const t2 =  useTranslations();

  return (
    <div>
      <h1>{t('userName', {userName: 'Parvej khan'})}</h1>
      <h1>{t2('dashboard.userName', {userName: 'Parvej khan T@2'})}</h1>
      <h1>{t2('missingKey', {default: 'fallback text'})}</h1>
      <UserInfo count={10}/>
    </div>
  );
}
