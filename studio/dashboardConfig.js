export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5de238dbeb79c52dade18524',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-kpnmcvxo',
                  apiId: 'fb473237-df80-4cc3-8243-ecce5309f028'
                },
                {
                  buildHookId: '5de238db63eafd33bec632d6',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-rbvamkoj',
                  apiId: 'e3ad74ed-aa5f-4400-acf4-54d458a59300'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vaninawohlleb/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-rbvamkoj.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
