import NextIntlProvider from "../i18n/NextIntlProvider";
import { getMessages } from "next-intl/server";
import { loadNamespaces } from "../i18n/loadNamespaces";
import Navigation2 from "../components/Navigation2";
export default async function Page() {
  return (
    <NextIntlProvider namespaces={["campaignProfile"]}>
      <Navigation2 />
    </NextIntlProvider>
  );
}
