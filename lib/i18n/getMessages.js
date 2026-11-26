import fs from 'fs';
import path from 'path';

export async function getMessages(locale, namespaces = []) {
  const messages = {};

  for (const ns of namespaces) {
    const filePath = path.join(
      process.cwd(),
      'static/locales',
      locale,
      `${ns}.json`
    );

    if (fs.existsSync(filePath)) {
      const file = fs.readFileSync(filePath, 'utf-8');
      messages[ns] = JSON.parse(file);
    }
  }

  return messages;
}
