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

const articleTemplate = path.resolve('./src/templates/ArticlePage.js');
const articlesTemplate = path.resolve('./src/templates/ArticlesPage.js');
const availabilityTemplate = path.resolve('./src/templates/AvailabilityPage.js');
const homeTemplate = path.resolve('./src/templates/HomePage.js');
const pageTemplate = path.resolve('./src/templates/GenericPage.js');
const productTemplate = path.resolve('./src/templates/ProductPage.js');

exports.createPages = async ({
  actions: { createPage },
}) => {
  const pagesResponse = await fetch(`${process.env.REST_URL}/${PAGES}`);
  let pages = await pagesResponse.json();

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

  const slugs = {
    equilibrium: 'spokoj-i-rownowaga',
    relaxx: 'strefa-relaksu',
    sleeep: 'zdrowy-sen',
  };

  const getCategorySlug = postType => slugs[postType];

  const getContext = data => {
    const { acf, slug, type } = data;

    const global = {
      content: data.content.rendered,
      cover: acf?.cover,
      heading: acf?.heading,
      lead: acf?.lead,
      title: acf?.title,
    };

    if (slug === 'strona-glowna') {
      return {
        articles: {
          ...acf.articles,
          articles: acf.articles.articles.map(article => ({
            ...article,
            url: `/${getCategorySlug(article.article.post_type)}/${article.article.post_name}`,
          })),
        },
        carousel: acf.carousel.map(item => ({
          ...item,
          url: `/${getCategorySlug(item.post.post_type)}/${item.post.post_name}`,
        })),
        links: acf['hero-links'],
        products: acf.products,
      };
    }

    if (type === 'products') {
      return {
        ...global,
        color: acf['header-cta']?.color,
        cta: acf['header-cta'],
        product: {
          ...acf.product,
          links: acf.product?.links.map(link => ({
            ...link,
            url: `/${getCategorySlug(link.post.post_type)}/${link.post.post_name}`,
          })),
        },
        summary: acf.summary,
      };
    }

    if (slug === 'gdzie-kupic') {
      return {
        ...global,
        availability: acf.availability,
        pharmacies: acf.pharmacies,
      }
    }

    if (slug === 'psycholog-radzi') {
      // console.log(acf);
      return {
        ...global,
        articles: acf.articles,
      };
    }

    if (Object.keys(slugs).includes(type)) {
      return {
        ...global,
        sections: acf['article-body'],
      };
    }


    return global;
  };

  const getPath = ({
    slug, type,
  }) => {
    if (slug === 'strona-glowna') {
      return '/';
    }

    if (type === 'products') {
      return `/produkty/${slug}`;
    }

    if (Object.keys(slugs).includes(type)) {
      return `/${getCategorySlug(type)}/${slug}`
    }

    return `/${slug}`;
  };

  const getTemplate = ({
    slug, type,
  }) => {
    if (slug === 'strona-glowna') {
      return homeTemplate;
    }

    if (type === 'products') {
      return productTemplate;
    }

    if (Object.keys(slugs).includes(type)) {
      return articleTemplate;
    }

    if (slug === 'gdzie-kupic') {
      return availabilityTemplate;
    }

    if (slug === 'psycholog-radzi') {
      return articlesTemplate;
    }

    return pageTemplate;
  };

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

  pages = [
    ...equilibriumData,
    ...pages,
    ...productsData,
    ...relaxData,
    ...sleepData,
  ];

  console.log(pages.sleepData);

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

    const { title: { rendered: renderedTitle } } = page;

    const context = {
      ...page,
      company: {
        ...company,
        links: company.links.map(item => item.links),
      },
      featuredProducts: productsData,
      footerLinks,
      legal,
      metadata,
      renderedTitle,
    };

    const pageData = {
      component: getTemplate(page),
      context: {
        ...context,
        ...getContext(page),
      },
      path: getPath(page),
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
