export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '610015a7c53b3f1fe6ee0898',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-test-studio-e29syij3',
                  apiId: '19ae9b0b-dbea-4754-8125-246858d41422'
                },
                {
                  buildHookId: '610015a6d79cfc21b62d75ab',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-test-web-nxjrqoeb',
                  apiId: '4804224b-27c4-4126-965e-608c7f7a3fb9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AishaBlake/sanity-gatsby-portfolio-test',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-test-web-nxjrqoeb.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
