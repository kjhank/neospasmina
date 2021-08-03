/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
require('dotenv').config({
  REST_URL: `.env.${process.env.REST_URL}`,
});

const fetch = require('node-fetch');
const path = require('path');
const { PAGES } = require('./src/utils/static/endpoints.json');

const pageTemplate = path.resolve('./src/templates/generic-page.js');

exports.createPages = async ({
  actions: { createPage },
}) => {
  const pagesResponse = await fetch(`${process.env.REST_URL}/${PAGES}`);
  const pages = await pagesResponse.json();

  pages.forEach(page => {
    const { acf } = page;

    const metadata = [
      {
        content: acf?.title,
        type: 'title',
      },
      {
        content: acf?.description,
        type: 'description',
      },
      {
        content: acf?.openGraph?.description,
        type: 'og:description',
      },
      {
        content: acf?.openGraph?.image,
        type: 'og:image',
      },
      {
        content: acf?.title,
        type: 'og:title',
      },
      {
        content: acf?.canonicalUrl,
        type: 'canonical-url',
      },
    ];

    const pagePath = `${page.slug}`;
    const { title: { rendered: renderedTitle } } = page;

    const context = {
      ...page,
      metadata,
      renderedTitle,
    };

    const pageData = {
      component: pageTemplate,
      context,
      path: pagePath,
    };

    console.log(pagePath);

    createPage(pageData);
  });
};
