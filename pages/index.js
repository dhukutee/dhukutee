import Link from 'next/link'

export default () => (
  <div>
    Click{' '}
    <Link href='/ContentWriting'>
      <a>here</a>
    </Link>{' '}
    to write new blog
    <br />
    Click{' '}
    <Link href='/blogs/hello_world'>
      <a>here</a>
    </Link>{' '}
    to read a blog
  </div>
)
