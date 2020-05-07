export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage?: string;
  logo: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  /**
   * full url, no username
   */
  facebook?: string;
  /**
   * full url, no username
   */
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
  /**
   * name and id of the mailchimp email field
   */
  mailchimpEmailFieldName?: string;
  /**
  /**
   * Meta tag for Google Webmaster Tools
   */
  googleSiteVerification?: string;
  /**
  /**
   * Appears alongside the footer, after the credits
   */
  footer?: string;
}

const config: WebsiteConfig = {
  title: 'MySongPro',
  description: 'A place to help you write your song',
  coverImage: 'img/blog-cover.png',
  logo: 'img/logo1.png',
  lang: 'en',
  siteUrl: 'https://mysongpro.com',
  facebook: 'https://www.facebook.com/jenjascoker',
  showSubscribe: true,
  mailchimpAction: 'https://mysongpro.us18.list-manage.com/subscribe/post?u=945f1715eb080d798239f57da&amp;id=976ac79a08',
  mailchimpName: 'b_945f1715eb080d798239f57da_976ac79a08',
  mailchimpEmailFieldName: 'MERGE0',
  googleSiteVerification: 'UA-132748364-6',
  footer: 'was built by Johnathan Coker',
};

export default config;
