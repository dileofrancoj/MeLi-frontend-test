export default function renderFullPage(html, { title, description }) {
  return `
        <!doctype html>
        <html lang="es">
        <head>
            <title>${title}</title>
            <meta charset="UTF-8" />
            <link href="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.12.0/mercadolibre/favicon.svg" rel="icon" data-head-react="true"/>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
            <link rel="stylesheet" href="https://active-styles.s3-sa-east-1.amazonaws.com/globals.css" />
            <meta name="description" content=${description} />
            </head>
        <body>
            <div id="root">${html}</div>
            <script src="/bundle.js"></script>
        </body>
        </html>
    `;
}
