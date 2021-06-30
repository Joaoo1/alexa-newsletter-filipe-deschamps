function cleanBody(body = '') {
  let cleanedBody = body;

  // Remove all ocorrurences of each Link case
  let m;
  do {
    const regex = /Link(( |\n)+)(( )*)Afiliado(.+?)>/gis;
    m = regex.test(cleanedBody);
    if (m) {
      cleanedBody = cleanedBody.replace(regex, 'Confira o link no email.');
    }
  } while (m);

  do {
    const regex = /Link(( |\n)+)(( )*)Patrocinado(.+?)>/gis;
    m = regex.test(cleanedBody);
    if (m) {
      cleanedBody = cleanedBody.replace(regex, 'Confira o link no e-mail.');
    }
  } while (m);

  do {
    const regex = /Link(( |\n)+)(( )*)Afiliado(.+?)\)/gis;
    m = regex.test(cleanedBody);
    if (m) {
      cleanedBody = cleanedBody.replace(regex, 'Confira o link no email.');
    }
  } while (m);

  do {
    const regex = /Link(( |\n)+)(( )*)Patrocinado(.+?)\)/gis;
    m = regex.test(cleanedBody);
    if (m) {
      cleanedBody = cleanedBody.replace(regex, 'Confira o link no e-mail.');
    }
  } while (m);

  return cleanedBody;
}

function getNews(rawBody = '') {
  // Remove useless data
  let body = rawBody.replace(/(?=Cancelar inscrição).*/gis, '');

  body = cleanBody(body);

  // Change colon for dot to make alexa speaking more "naturally"
  body = body.replace(/:/g, '.');

  // Split news by blank line
  body = body.split(/^\s*[\r\n]/gm).map((e) => e.replace('\n', ' '));

  // Remove what is not news
  body.splice(0, 2);

  return body;
}

function getNewsletterDate(rawBody = '') {
  const dateString = rawBody.match(/(?<=Date: )(.*?)(?=\n)/g);
  return new Date(dateString[0]);
}

export { getNews, getNewsletterDate };
