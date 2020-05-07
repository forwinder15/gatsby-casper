import React from 'react';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/core';

import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from '../styles/shared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../templates/post';
import { colors } from '../styles/colors';

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header className="site-archive-header no-image" css={[SiteHeader, SiteArchiveHeader]}>
        <div css={[outer, SiteNavMain]}>
          <div css={inner}>
            <SiteNav isHome={false} />
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <div css={inner}>
          <article className="post page" css={[PostFull, NoImage]}>
            <PostFullHeader className="post-full-header">
              <PostFullTitle className="post-full-title">About</PostFullTitle>
            </PostFullHeader>

            <PostFullContent className="post-full-content">
              <div className="post-content">
                <h5>
                  Hi there! My name is Jason.
                </h5>
                <p>
                  Let me take this opportunity to welcome you to the site. If you can't tell, I love songwriting. <strong>I hope that I can either pass on that love, learn something from you, or teach you something I have learned.</strong>

                  My journey began when I wrote my first song at 15 years old and then taught myself to play guitar. That was an interesting experience, to say the least. I've gotten frustrated and tried to stop a few times over these nearly 25 years but I've never been able to quit. <strong>It's what God put in me.</strong>

                  I was blessed very early on in my career with opportunities to play and sing in many different places. Churches, coffee houses, nursing homes, live events, band competitions, singer/songwriter competitions, and other venues.

                  Let me tell you that forgetting the words to your song in front a thousand people, hearing someone yell, "Speak up, I can't hear ya!" in the middle of a performance or forgetting to cue your demo cassette (yeah, I said cassette) will help you cut your teeth and keep you humble!

                  <strong>You may see Google Ads on this site. They are not there to take advantage of you but rather they are a way for me to keep this site running for you, so thanks for understanding. </strong>

                  I remember some of the hours (thousands)
                </p>
                <p>
                  I've spent in my home studio, but they are mostly a blur. Some of that time was spent chasing the perfect vocal take. Yeah, I wish I could have all "those" hours back. Needless to say, I've learned a thing or two about recording.

                  25 years is a long time to hone a craft. I should say it's a long time to go to the school of hard knots but still, I've learned a lot. <strong>I would love the opportunity to share some of what I've learned with you.</strong>

                  You may be wondering if anyone has ever recorded my music. The answer is, yes. This may surprise you, but "that" is not what takes to become a great songwriter. People have been writing great songs since before we figured out how to make a living at it. Many of which never made it to the radio.

                  “The proof is in the pudding." Let me show you. I can help you fix, find, and fall in love with the art of songwriting. God gave you a gift. <strong>Let's work together to make your song the best it can be.**Maybe you can teach me a thing or two as well.</strong>
                  <br />
                  <br />For even more content Check out my <a href="https://www.youtube.com/channel/UCpHN583XVu3K28kYJQJ46RA?view_as=subscriber">YouTube Channel</a>
                  <br />
                  Keep writing,
                  Jason
                </p>
              </div>
            </PostFullContent>
          </article>
        </div>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
