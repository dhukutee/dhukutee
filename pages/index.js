import Link from 'next/link';
import Page from './layouts/main';

export default () => (
  <Page>
    <div class="hero">
      <h2>Financial Information at your fingertips!</h2>
      <h4>
        Dhukutee brings you all the accurate information you need to make
        financial decisions.
      </h4>
    </div>
    Click{' '}
    <Link href="/admin/write">
      <a>here</a>
    </Link>{' '}
    to write new blog
    <br />
    Click{' '}
    <Link href="/blogs/hello_world">
      <a>here</a>
    </Link>{' '}
    to read a blog
  </Page>
);
