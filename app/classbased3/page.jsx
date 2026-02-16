import NextIntlProvider from "../i18n/NextIntlProvider";
import ClassBased from "../components/ClassBased";
export default async function Page() {
  return (
    <NextIntlProvider namespaces={["dashboard", "charity", "campaignProfile"]}>
      <ClassBased />
    </NextIntlProvider>
  );
}
