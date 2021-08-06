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
const {
  ACF_COMPANY, ACF_LEGAL, ARTICLES_EQUILIBRIUM, ARTICLES_RELAX, ARTICLES_SLEEP, PAGES, PRODUCTS,
} = require('./src/utils/static/endpoints.json');

const pageTemplate = path.resolve('./src/templates/generic-page.js');

exports.createPages = async ({
  actions: { createPage },
}) => {
  const pagesResponse = await fetch(`${process.env.REST_URL}/${PAGES}`);
  const pages = await pagesResponse.json();

  const legalResponse = await fetch(`${process.env.REST_URL}/${ACF_LEGAL}`);
  const legalData = await legalResponse.json();

  const companyResponse = await fetch(`${process.env.REST_URL}/${ACF_COMPANY}`);
  const companyData = await companyResponse.json();

  const productsResponse = await fetch(`${process.env.REST_URL}/${PRODUCTS}`);
  const productsData = await productsResponse.json();

  const equilibriumResponse = await fetch(`${process.env.REST_URL}/${ARTICLES_EQUILIBRIUM}`);
  const equilibriumData = await equilibriumResponse.json();

  const relaxResponse = await fetch(`${process.env.REST_URL}/${ARTICLES_RELAX}`);
  const relaxData = await relaxResponse.json();

  const sleepResponse = await fetch(`${process.env.REST_URL}/${ARTICLES_SLEEP}`);
  const sleepData = await sleepResponse.json();

  const footerLinks = [
    {
      heading: 'Produkty',
      items: productsData.map(product => ({
        slug: `/produkty/${product.slug}`,
        title: product.title.rendered,
      })),
    },
    {
      heading: 'Spokój i równowaga',
      items: equilibriumData.map(article => ({
        slug: `/spokoj-i-rownowaga/${article.slug}`,
        title: article.title.rendered,
      })),
    },
    {
      heading: 'Zdrowy sen',
      items: sleepData.map(article => ({
        slug: `/zdrowy-sen/${article.slug}`,
        title: article.title.rendered,
      })),
    },
    {
      heading: 'Strefa relaksu',
      items: relaxData.map(article => ({
        slug: `/strefa-relaksu/${article.slug}`,
        title: article.title.rendered,
      })),
    },
    {
      heading: 'Ważne telefony',
      items: [
        {
          slug: '/wazne-telefony',
          title: 'Dla osób w kryzysie',
        },
      ],
    },
  ];

  const { acf: legal } = legalData;
  const { acf: company } = companyData;

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
    const isHome = page.slug === 'strona-glowna';

    const context = {
      ...page,
      company: {
        ...company,
        links: company.links.map(item => item.links),
      },
      footerLinks,
      legal,
      metadata,
      renderedTitle,
    };

    const pageData = {
      component: pageTemplate,
      context,
      path: isHome ? '/' : pagePath,
    };

    createPage(pageData);
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        path: require.resolve('path-browserify'),
      },
      fallback: {
        fs: false,
        os: require.resolve('os-browserify/browser'),
      },
    },
  });
};
