import NextIntlProvider from "../i18n/NextIntlProvider";
import { getMessages } from "next-intl/server";
import { loadNamespaces } from "../i18n/loadNamespaces";
import Navigation1 from "../components/Navigation1";
export default async function Page() {
  return (
    <NextIntlProvider namespaces={["dashboard"]}>
      <Navigation1 />
    </NextIntlProvider>
  );
}
